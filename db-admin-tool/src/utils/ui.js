/* globals SpreadsheetApp */

/**
 * Create alert with given msg
 */
export const alert = msg => SpreadsheetApp.getUi().alert(msg)

/**
 * Show popup message on right-bottom of sheet
 */
export const toast = msg => SpreadsheetApp.getActive().toast(msg)

/**
 * Show prompt to user. Validate answer. Propose to try again, if fail.
 * @param {string} question Prompt text
 * @param {(value) => true | false} validateFn Should returns true, if argument is passed
 * @returns Response text or null
 */
export function ask(title, question, validateFn, ui = SpreadsheetApp.getUi()) {
  const promptResponse = ui.prompt(title, question, ui.ButtonSet.OK_CANCEL)

  if (promptResponse.getSelectedButton() !== ui.Button.OK) {
    return null
  }

  const value = promptResponse.getResponseText()

  if (validateFn(value)) {
    return value
  }

  const alertResponse = ui.alert(`Invalid ${question}. Try again?`, ui.ButtonSet.YES_NO)

  if (alertResponse === ui.Button.YES) {
    return ask(title, question, validateFn, ui)
  }

  return null
}
