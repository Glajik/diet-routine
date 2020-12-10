/* globals SpreadsheetApp, Utilities */
import { head, eq, toA1n } from '../utils/primitives'
import { columnsBySheetName } from '../schema'

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

export function addEntry(sheetName, data) {
  const byField = matchTypes(data)
  const fields = columnsBySheetName[sheetName]
  const rowValues = fields.map(byField)
  const ss = SpreadsheetApp.getActive()
  const sheet = ss.getSheetByName(sheetName)
  sheet.appendRow(rowValues)
}

export function updateWithEntries(sheetName, list, activate = true) {
  const fields = columnsBySheetName[sheetName]
  const getRowValues = data => {
    const byField = matchTypes(data)
    return fields.map(byField)
  }
  const body = list.map(getRowValues)
  const headers = fields.map(f => f.name)
  const values = [headers].concat(body)
  const row = 1;
  const col = 1;
  const rows = values.length
  const cols = fields.length
  const ss = SpreadsheetApp.getActive()
  const sheet = ss.getSheetByName(sheetName)
  sheet.clearContents()
  sheet.getRange(row, col, rows, cols).setValues(values)
  if (activate) {
    sheet.activate()
  }
}

function getRowBy(value, column, sheet) {
  const allIds = sheet.getRange(toA1n(column)).getValues().map(head)
  const index = allIds.findIndex(eq(value))
  if (index < 0) {
    return null
  }
  const row = index + 1
  return sheet.getRange(toA1n(row))
}

export function updateEntryById(sheetName, data) {
  // TODO:
  // Handle updates
  const { id } = data
  const ss = SpreadsheetApp.getActive()
  const sheet = ss.getSheetByName(sheetName)

  // Find row range
  const column = 'A'
  const range = getRowBy(id, column, sheet)
  if (!range) {
    throw new RangeError(`Can not find row with index ${id}`)
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
