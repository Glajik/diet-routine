import CollectionService from './collectionService'
import SheetService, { getSheetByName, getSelectedDocIds } from './SheetService'
import { toast } from '../utils/ui'

const ALLOWED_TABS = ['Products']

const isValidTab = name => ALLOWED_TABS.includes(name)

/**
 * Update tab with data from the Firestore collection with same name.
 */
// eslint-disable-next-line no-unused-vars
export function updateViewTab(name) {
  if (!isValidTab(name)) {
    toast('Abort. You can\'t update this tab from Firestore')
    console.warn(`Update not allowed for tab "${name}" (updateCurrentTab)`)
    return
  }
  const entries = new CollectionService(name).getAll()
  const sheet = getSheetByName(name)
  new SheetService(sheet).updateWithEntries(entries)
}

export function createEntryOnViewTab(name) {
  if (!isValidTab(name)) {
    toast('Abort. You can\'t create entry on this tab')
    console.warn(`Creating is not allowed for tab "${name}" (createEntryOnViewTab)`)
    return
  }
  const entry = new CollectionService(name).create({})
  const sheet = getSheetByName(name)
  new SheetService(sheet).addEntry(entry)
}

export function deleteSelectedOnViewTab(name) {
  const sheet = getSheetByName(name)

  const docIds = new SheetService(sheet).getSelectedIds()
  console.debug('docIds', docIds)

  if (!docIds.length) {
    toast('Abort. No selected entries to delete')
    console.warn(`No seleced entries on tab "${name}" (deleteSelectedOnViewTab)`)
    return
  }

  const service = new CollectionService(name)

  const result = docIds.map(
    (docId) => service.deleteById(docId),
  )
  console.debug('result', result)

  updateViewTab(name)
}

/**
 * Handle editing cells.
 * @param {Event} e Edit trigger event
 *
 * @param {Event} e Edit trigger event
 * @see https://developers.google.com/apps-script/guides/triggers/events#edit
 */
// eslint-disable-next-line no-unused-vars
export function onEditViewTab(e) {
  const SELECTED = 1
  const DOC_ID = 2

  const { range, value, oldValue } = e
  const sheet = range.getSheet()
  const name = sheet.getName()

  // Get edited row, column and new value
  const row = range.getRow()
  const column = range.getColumn()

  if (!isValidTab(name)) {
    console.info(`Ignore editing for tab "${name}" (onEditViewTab)`)
    return
  }

  // Ignore header
  if (row < 2) {
    console.info(`Ignore editing headers for tab "${name}" (onEditViewTab)`)
    return
  }

  // Ignore SELECTED column
  if (column === SELECTED) {
    console.info(`Ignore selecting for tab "${name}" (onEditViewTab)`)
    return
  }

  const docId = sheet.getRange(row, DOC_ID).getValue()

  // Use header as key
  const key = sheet.getRange(1, column).getValue()
  const data = { [key]: value }

  const entry = new CollectionService(name).updateById(docId, data)

  // Revert data
  if (!entry) {
    toast('Error. Entry not updated')
    console.warn(`Entry not updated on tab "${name}" (updateCellOnViewTab)`)
    range.setValue(oldValue)
  }

  new SheetService(sheet).updateEntryByRow(row, entry)

  // Update time
  toast('Updated')
}
