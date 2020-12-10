/* globals SpreadsheetApp */

import { ask, toast } from './common'
import { setFirestoreCredentials } from '../services/credentialsService'

// eslint-disable-next-line no-unused-vars
export function showCredentialsDialog() {
  const title = 'Set credentials for Firebase'
  const ui = SpreadsheetApp.getUi()

  const askUser = (question, fn) => ask(title, question, fn, ui)

  const validEmail = v => /^\w+[\w-.]*@\w+(([-\w]+)|(\w*))(\.[a-z]{2,20}){1,3}$/.test(v)
  const validProjectId = v => /^[\w-]+$/.test(v)
  const validPrivateKey = v => /^[\S ]+$/.test(v)

  const clientEmail = askUser('Service account email (client_email)', validEmail)

  if (!clientEmail) {
    toast('Canceled')
    return
  }

  const projectId = askUser('Project Id', validProjectId)

  if (!projectId) {
    toast('Canceled')
    return
  }

  const privateKey = askUser('Private Key', validPrivateKey)

  if (!privateKey) {
    toast('Canceled')
    return
  }

  setFirestoreCredentials(clientEmail, projectId, privateKey)

  toast('Saved')
}
