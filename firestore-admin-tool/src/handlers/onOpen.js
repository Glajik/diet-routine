/* globals SpreadsheetApp */

import { showCredentialsDialog } from '../ui/dialogs' // eslint-disable-line
import { getFirestoreCredentials } from '../services/credentialsService'

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
  console.log(getFirestoreCredentials())
}
