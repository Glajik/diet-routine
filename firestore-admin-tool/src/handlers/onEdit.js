/* globals SpreadsheetApp */
import { updateCellOnViewTab } from '../services/viewService'

/**
 * Handle editing cells.
 * Trigger should be installed.
 * @see https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers
 *
 * @param {Event} e Edit trigger event
 * @see https://developers.google.com/apps-script/guides/triggers/events#edit
 */
// eslint-disable-next-line no-unused-vars
function onEditInstall(e) {
  const SELECTED = 1
  const DOC_ID = 2

  // Unpack event object
  // const sheet = e.source.getActiveSheet()
  const sheet = SpreadsheetApp.getActiveSheet()
  const name = sheet.getName()
  const { range, value, oldValue } = e

  // Get edited row, column and new value
  const row = range.getRow()
  const column = range.getColumn()

  // Ignore header
  if (row < 2) {
    return
  }

  // Ignore SELECTED column
  if (column === SELECTED) {
    return
  }

  const docId = sheet.getRange(row, DOC_ID).getValue()

  // Use header as key
  const key = sheet.getRange(1, column).getValue()

  const data = { [key]: value }

  const result = updateCellOnViewTab(name, docId, data)

  // Revert data
  if (!result) {
    range.setValue(oldValue)
  }
}
