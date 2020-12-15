import CollectionService from './collectionService'
import SheetService, { getSheetByName, updateEntryByDocId, getSelectedDocIds } from './SheetService'
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

export function updateCellOnViewTab(name, docId, data) {
  if (!isValidTab(name)) {
    toast('Abort. You can\'t update entry on this tab')
    console.warn(`Updating is not allowed for tab "${name}" (updateCellOnViewTab)`)
    return null
  }

  const service = new CollectionService(name)
  const entry = service.updateById(docId, data)

  if (!entry) {
    toast('Error. Entry not updated')
    console.warn(`Entry not updated on tab "${name}" (updateCellOnViewTab)`)
    return null
  }

  // Update row
  updateEntryByDocId(name, entry)
  toast('Updated')
  return entry
}

export function deleteSelectedOnViewTab(name) {
  const docIds = getSelectedDocIds(name)
  console.debug('docIds', docIds)
  const service = new CollectionService(name)
  if (!docIds.length) {
    toast('Abort. No selected entries to delete')
    console.warn(`No seleced entries on tab "${name}" (deleteSelectedOnViewTab)`)
    return
  }
  const result = docIds.map(
    (docId) => service.deleteById(docId),
  )
  console.debug('result', result)

  updateViewTab(name)
}
