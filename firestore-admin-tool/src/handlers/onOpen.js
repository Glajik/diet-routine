/* globals SpreadsheetApp */
import { showCredentialsDialog } from '../ui/credentialService' // eslint-disable-line
import { showLogs, hideLogs, cleanLogs } from '../utils/Logger' // eslint-disable-line no-unused-vars
import { doTests } from '../tests/doTests' // eslint-disable-line no-unused-vars
import { testSpreadsheetService } from '../tests/testSpreadsheetService' // eslint-disable-line no-unused-vars
import { updateViewTab, createEntryOnViewTab, deleteSelectedOnViewTab } from '../services/viewService'

// eslint-disable-next-line no-unused-vars
function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('Admin Tool')
    .addItem('Update Tab', 'updateCurrentTab')
    .addItem('Add entry', 'addToCurrentTab')
    .addItem('Delete selected', 'deleteSelectedOnCurrentTab')
    .addSubMenu(
      ui.createMenu('Products')
        .addItem('Get All', 'getProductsAndUpdateTab')
        .addItem('Create', 'createProduct')
        .addItem('Delete', 'deleteProduct')
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
        .addItem('Run SpreadsheetService Test', 'testSpreadsheetService')
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

// eslint-disable-next-line no-unused-vars
function createProduct() {
  createEntryOnViewTab('Products')
}

function deleteProduct() {
  deleteSelectedOnViewTab('Products')
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

/**
 * Create blank document in Firestore and add to current "view" tab
 */
// eslint-disable-next-line no-unused-vars
function addToCurrentTab() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getActiveSheet()
  const name = sheet.getName()
  createEntryOnViewTab(name)
}

/**
 * Delete selected documents on current tab
 */
// eslint-disable-next-line no-unused-vars
function deleteSelectedOnCurrentTab() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getActiveSheet()
  const name = sheet.getName()
  deleteSelectedOnViewTab(name)
}
