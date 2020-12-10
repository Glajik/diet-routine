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
        .addItem('Get All', 'getProductsAndUpdateTab'),
    )
    .addSubMenu(
      ui.createMenu('Settings')
        .addItem('Set credentials', 'showCredentialsDialog'),
    )
    .addToUi()
}

// eslint-disable-next-line no-unused-vars
function getProductsAndUpdateTab() {
  const name = 'Products'
  const entries = getEntriesFromCollection(name)
  console.log(entries)
  updateWithEntries(name, entries)
}
