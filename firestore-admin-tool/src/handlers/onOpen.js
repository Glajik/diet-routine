/* globals SpreadsheetApp */

import { updateWithEntries } from '../services/spreadsheetService'
import { showCredentialsDialog } from '../ui/credentialService' // eslint-disable-line
import { getEntriesFromCollection } from '../services/firestoreService'
import { toast } from '../utils/ui'
import { showLogs, hideLogs, cleanLogs } from '../utils/Logger' // eslint-disable-line no-unused-vars

// eslint-disable-next-line no-unused-vars
function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('Admin Tool')
    .addItem('Update Tab', 'updateCurrentTab')
    .addSubMenu(
      ui.createMenu('Products')
        .addItem('Get All', 'getProductsAndUpdateTab')
    )
    .addSubMenu(
      ui.createMenu('Settings')
        .addItem('Set credentials', 'showCredentialsDialog')
    )
    .addSubMenu(
      ui.createMenu('Logger')
        .addItem('Show Logs', 'showLogs')
        .addItem('Hide Logs', 'hideLogs')
        .addItem('Clean', 'cleanLogs')
    )
    .addToUi()
}

/**
 * Update tab with data from the collection with same name.
 */
// eslint-disable-next-line no-unused-vars
function getDocsAndUpdateTab(name) {
  const entries = getEntriesFromCollection(name)
  updateWithEntries(name, entries)
}

/**
 * Get products from `Products` collection and update tab
 */
// eslint-disable-next-line no-unused-vars
function getProductsAndUpdateTab() {
  getDocsAndUpdateTab('Products')
}

/**
 * Update current "view" tab with data from the
 * corresponding collection. Allowed tabs set in `allowedTabs`.
 * Abort if not allowed.
 */
// eslint-disable-next-line no-unused-vars
function updateCurrentTab() {
  const allowedTabs = ['Products']
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getActiveSheet()
  const name = sheet.getName()
  if (allowedTabs.includes(name)) {
    getDocsAndUpdateTab(name)
    return
  }
  toast('Abort. You can\'t update this tab from Firestore')
  console.warn(`Update not allowed for tab "${name}" (updateCurrentTab)`)
}
