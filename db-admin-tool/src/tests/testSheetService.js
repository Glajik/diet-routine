/* globals SpreadsheetApp */

import Kava from '../utils/Kava';
import { lookupRowRange } from '../services/SheetService'

export function testSpreadsheetService() {
  const t = new Kava('Test Spreadsheet Service')

  const DOC_ID_COLUMN = 'B'
  const docId = '8MrIYk1VneNrPGlvhbB2'
  const sheetName = 'Products'

  const ss = SpreadsheetApp.getActive()
  const sheet = ss.getSheetByName(sheetName)

  t.make('Test lookupRowRange()', () => {
    const range = lookupRowRange(docId, DOC_ID_COLUMN, sheet)
    t.isFalse(!range, 'Range should be present')
  })

  // Output test resuts
  console.debug(t.output)
}
