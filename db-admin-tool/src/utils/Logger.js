/* globals SpreadsheetApp */

/**
 * Show "Logger" tab. Set focus to last row.
 */
export function showLogs() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Logger')
  const row = sheet.getLastRow()
  sheet.getRange(`${row}:${row}`).activate()
}

/**
 * Clean "Logger" tab
 */
export function cleanLogs() {
  SpreadsheetApp.getActive()
    .getSheetByName('Logger')
    .getRange('A2:C')
    .clearContent()
}

export function hideLogs() {
  SpreadsheetApp.getActive().getSheetByName('Logger').hideSheet()
}

/**
 * Logger creator
 */
export const createSheetLogger = (sheetName) => {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName)
  const add = (text, type = '') => sheet.appendRow([new Date(), type, text])

  const serialize = (item) => {
    switch (typeof item) {
      case 'object':
        return JSON.stringify(item)
      case 'function':
        return String(item)
      default:
        return item
    }
  }

  const asText = items => items.map(serialize).join(' ')

  const info = (...args) => add(asText(args), 'INFO')
  const debug = (...args) => add(asText(args), 'DEBUG')
  const warn = (...args) => add(asText(args), 'WARNING')
  const error = (...args) => add(asText(args), 'ERROR')
  const log = (...args) => add(asText(args))

  return { log, info, debug, warn, error }
}

/**
 * Override standard "console" global.
 * Log data to Logger tab.
 * @example
 * console.info('Hello world') -> 'INFO: Hello world'
 */
export const console = createSheetLogger('Logger')
