/* globals SpreadsheetApp */

import { updateWithEntries } from '../services/spreadsheetService'
import { showCredentialsDialog } from '../ui/credentialService' // eslint-disable-line
import { getEntriesFromCollection } from '../services/firestoreService'

// eslint-disable-next-line no-unused-vars
function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('Admin Tool')
    .addSubMenu(
      ui.createMenu('Products')
        .addItem('Get All', 'getDocsAndUpdateTab'),
    )
    .addSubMenu(
      ui.createMenu('Settings')
        .addItem('Set credentials', 'showCredentialsDialog'),
    )
    .addToUi()
}

// eslint-disable-next-line no-unused-vars
function getDocsAndUpdateTab() {
  const allowedToUpdate = ['Products']
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getActiveSheet()
  const name = sheet.getName()
  if (allowedToUpdate.includes(name)) {
    const entries = getEntriesFromCollection(name)
    updateWithEntries(name, entries)
  }
}
