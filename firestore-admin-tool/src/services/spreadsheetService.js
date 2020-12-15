/* globals SpreadsheetApp, Utilities */
import fp from '../utils/fp'

export const matchTypes = data => field => {
  const value = data[field.name]
  switch (field.type) {
    case 'timestamp':
      try {
        // Case if date is empty
        if (!value) {
          return null
        }
        return new Date(value)
      } catch (error) {
        console.warn(`Can't convert ${value} to Date`);
        return null
      }
    case 'blob':
      return Utilities.newBlob(value).getDataAsString()
    case 'json':
      return JSON.stringify(value)
    case 'url':
      return `=HYPERLINK("${value}", "Link")`
    case 'numeric':
    case 'text':
    case 'boolean':
    default:
      return value;
  }
}

/**
 * Get sheet by name
 * @param {string} name Sheet name
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} sheet
 */
export function getSheetByName(name) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name)
}

export function addEntry(sheetName, data) {
  const byField = matchTypes(data)
  const fields = columnsBySheetName[sheetName]
  const rowValues = fields.map(byField)
  const ss = SpreadsheetApp.getActive().getActiveSheet()
  const sheet = ss.getSheetByName(sheetName)
  sheet.appendRow(rowValues)
}

/**
 * Get headers of sheet
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @returns {[]} Header values
 */
export function getHeaders(sheet) {
  const [headers] = sheet.getRange('1:1').getValues()
  return headers.filter(v => !!v)
}

/**
 * Create set of useful functions to work with sheet and it's data
 * @param {[string]} fields List of field names
 * @returns Set of fuctions
 */
export const useColumns = fields => {
  const { zipObj, unzipObj } = fp
  const getColIndex = key => fields.indexOf(key)
  const getColNum = key => getColIndex(key) + 1
  const fromValues = values => zipObj(fields, values)
  const toValues = item => unzipObj(item, fields)
  const getColCount = () => fields.length
  return {
    getColNum, getColIndex, getColCount, fromValues, toValues,
  }
}

/**
 * Update sheet with entries
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet 
 * @param {[object]} entries 
 * @param {boolean} activate Activate sheet after update
 */
export function updateWithEntries(sheet, entries, activate = true) {
  const fields = getHeaders(sheet)
  const { toValues } = useColumns(fields)
  const row = 1;
  const col = 1;
  const rows = entries.length + 1
  const cols = fields.length
  const body = entries.map(toValues)
  const values = [fields].concat(body)

  sheet.clearContents()
    .getRange(row, col, rows, cols)
    .setValues(values)

  if (activate) {
    sheet.activate()
  }
}

export function getRowBy(value, column, sheet) {
  const { toA1n, head, eq } = fp
  const allIds = sheet.getRange(toA1n(column)).getValues().map(head)
  const index = allIds.findIndex(eq(value))
  if (index < 0) {
    return null
  }
  const row = index + 1
  return sheet.getRange(toA1n(row))
}

export function updateEntryByDocId(sheetName, data) {
  // Handle updates
  const { docId } = data
  const ss = SpreadsheetApp.getActive()
  const sheet = ss.getSheetByName(sheetName)

  // Find row range
  const DOC_ID_COLUMN = 'B'
  const range = getRowBy(docId, DOC_ID_COLUMN, sheet)
  if (!range) {
    throw new RangeError(`Can not find row with docId ${docId}`)
  }

  // Update row cells, only presented in data object
  const fields = columnsBySheetName[sheetName]
  fields.forEach((field, index) => {
    const byField = matchTypes(data)
    const value = byField(field)
    if (value === undefined) {
      return
    }
    const col = index + 1
    range.getCell(1, col).setValue(value)
  })
}

export function getSelectedDocIds(sheetName) {
  const ss = SpreadsheetApp.getActive()
  const sheet = ss.getSheetByName(sheetName)
  // Skip header
  const [, ...values] = sheet.getRange('A:B').getValues()

  const isSelected = ([selected]) => !!selected
  const isValid = docId => !!docId
  return values.filter(isSelected)
    .map(([, docId]) => docId)
    .filter(isValid)
}
