/* globals SpreadsheetApp */
import { showCredentialsDialog } from '../ui/credentialService' // eslint-disable-line
import { showLogs, hideLogs, cleanLogs } from '../utils/Logger' // eslint-disable-line no-unused-vars
import { doTests } from '../tests/doTests' // eslint-disable-line no-unused-vars
import { updateViewTab } from '../services/viewService'

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
    .addSubMenu(
      ui.createMenu('Tests')
        .addItem('Run all', 'doTests')
    )
    .addToUi()
}

/**
 * Get products from `Products` collection and update tab
 */
// eslint-disable-next-line no-unused-vars
function getProductsAndUpdateTab() {
  updateViewTab('Products')
}

/**
 * Update current "view" tab with data from the
 * corresponding collection. Allowed tabs set in `allowedTabs`.
 * Abort if not allowed.
 */
// eslint-disable-next-line no-unused-vars
function updateCurrentTab() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getActiveSheet()
  const name = sheet.getName()
  updateViewTab(name)
}
