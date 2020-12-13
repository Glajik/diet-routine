import CollectionService from './collectionService'
import { updateWithEntries } from './spreadsheetService'
import { toast } from '../utils/ui'

/**
 * Update tab with data from the Firestore collection with same name.
 */
// eslint-disable-next-line no-unused-vars
export function updateViewTab(name) {
  const allowedTabs = ['Products']
  const service = new CollectionService(name)
  const entries = service.getAll()
  if (allowedTabs.includes(name)) {
    updateWithEntries(name, entries)
    return
  }
  toast('Abort. You can\'t update this tab from Firestore')
  console.warn(`Update not allowed for tab "${name}" (updateCurrentTab)`)
}
