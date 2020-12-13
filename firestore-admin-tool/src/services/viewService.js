import CollectionService from './collectionService'
import { updateWithEntries, addEntry, updateEntryByDocId } from './spreadsheetService'
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
  const service = new CollectionService(name)
  const entries = service.getAll()
  updateWithEntries(name, entries)
}

export function createEntryOnViewTab(name) {
  if (!isValidTab(name)) {
    toast('Abort. You can\'t create entry on this tab')
    console.warn(`Creating is not allowed for tab "${name}" (createEntryOnViewTab)`)
    return
  }
  const service = new CollectionService(name)
  const entry = service.create({})
  addEntry(name, entry)
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
