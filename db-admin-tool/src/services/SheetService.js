/* globals SpreadsheetApp, Utilities */
import fp from '../utils/fp'

/**
 * Create set of useful functions to work with sheet and it's data
 * @param {[string]} fields List of field names
 * @returns Set of fuctions
 */
export const useColumns = fields => {
  const { zipObj, unzipObj } = fp
  const getColIndex = key => fields.indexOf(key)
  const getColNum = key => getColIndex(key) + 1
  const getColName = colNum => fields.find((value, index) => colNum === index + 1)
  const fromValues = values => zipObj(fields, values)
  const toValues = item => unzipObj(item, fields)
  const getColCount = () => fields.length
  return {
    getColNum, getColName, getColIndex, getColCount, fromValues, toValues,
  }
}

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

/**
 * Get headers of sheet
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @returns {[]} Header values
 */
export function getSheetHeaders(sheet) {
  const [headers] = sheet.getRange('1:1').getValues()
  return headers.filter(v => !!v)
}

export function lookupRowRange(value, columnLetter, sheet) {
  const { toA1n, head, eq } = fp
  const allIds = sheet.getRange(toA1n(columnLetter)).getValues().map(head)
  const index = allIds.findIndex(eq(value))
  if (index < 0) {
    return null
  }
  const row = index + 1
  return sheet.getRange(toA1n(row))
}

class SheetService {
  /**
   * Create Sheet service
   * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
   */
  constructor(sheet) {
    this.sheet = sheet
    this.memo_fields = []
  }

  /**
   * Get headers of sheet
   * @returns {[]} Header values
   */
  get fields() {
    if (this.memo_fields.length) {
      return this.memo_fields
    }
    this.memo_fields = getSheetHeaders(this.sheet)
    return this.memo_fields
  }

  /**
   * Update sheet with entries
   * @param {[{}]} entries
   * @param {boolean} activate Activate sheet after update
   */
  updateWithEntries(entries, activate = true) {
    const { fields } = this
    const { toValues } = useColumns(fields)
    const row = 1;
    const col = 1;
    const rows = entries.length + 1
    const cols = fields.length
    const body = entries.map(toValues)
    const values = [fields].concat(body)

    this.sheet.clearContents()
      .getRange(row, col, rows, cols)
      .setValues(values)

    if (activate) {
      this.sheet.activate()
    }
  }

  /**
   * Append entry to sheet
   * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
   * @param {object} entry
   */
  addEntry(entry) {
    const { toValues } = useColumns(this.fields)
    this.sheet.appendRow(toValues(entry))
  }

  /**
   * Get entry by row numer
   * @param {number} row Row number (not index)
   * @returns {object} entry
   */
  getEntryByRow(row) {
    const { fromValues } = useColumns(this.fields)
    const [rowValues] = this.sheet.getRange(fp.toA1n(row)).getValues()
    return fromValues(rowValues)
  }

  /**
   * Update row with entry
   * @param {number} row
   * @param {object} entry
   */
  updateEntryByRow(row, entry) {
    const { toValues } = useColumns(this.fields)
    const col = 1;
    const rows = 1
    const cols = this.fields.length
    const values = [toValues(entry)]
    this.sheet.getRange(row, col, rows, cols).setValues(values)
  }

  /**
   * Update cells in row by data
   * @param {number} row
   * @param {object} data Cell data
   */
  updateCellByRow(row, data) {
    this.fields.forEach((key, index) => {
      const column = index + 1
      const value = data[key]
      if (value) {
        this.sheet.getRange(row, column).setValue(value)
      }
    })
  }

  /**
   * Get selected ids
   */
  getSelectedIds() {
    // Skip header
    const [, ...values] = this.sheet.getRange('A:B').getValues()

    const isSelected = ([selected]) => !!selected
    const isValid = docId => !!docId

    return values.filter(isSelected)
      .map(([, id]) => id)
      .filter(isValid)
  }

  /**
   * Get selected entries
   */
  getSelectedEntries() {
    const addRowId = (item, index) => ({ rowId: index + 2, ...item })
    const isSelected = item => !!item.selected
    const isValid = item => !!item.name

    // Skip header
    const [, ...values] = this.sheet.getDataRange().getValues()
    const { fromValues } = useColumns(this.fields)

    return values.map(fromValues)
      .map(addRowId)
      .filter(isSelected)
      .filter(isValid)
  }
}

export default SheetService
