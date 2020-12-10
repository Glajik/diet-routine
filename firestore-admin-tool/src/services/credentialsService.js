/* globals SpreadsheetApp */
import { ask, toast } from '../utils/ui'
import { setProp, getProp } from '../utils/props'

/**
 * Set Firestore credentials
 * @param {string} clientEmail 
 * @param {string} projectId 
 * @param {string} privateKey 
 */
export function setFirestoreCredentials(clientEmail, projectId, privateKey) {
  const json = JSON.stringify({ clientEmail, projectId, privateKey })
  setProp('FIREBASE_CREDENTIALS', json)
}

/**
 * Get Firestore credentials
 */
export function getFirestoreCredentials() {
  const json = getProp('FIREBASE_CREDENTIALS')

  if (!json) {
    throw new Error('Firebase credentials not saved')
  }

  const { clientEmail, projectId, privateKey } = JSON.parse(json)

  const privateKeyFixed = privateKey.split('\\n').join('\n')

  return { clientEmail, projectId, privateKey: privateKeyFixed }
}

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
    console.info('Canceled. Service account email was invalid. (showCredentialsDialog)')
    toast('Canceled')
    return
  }

  const projectId = askUser('Project Id', validProjectId)

  if (!projectId) {
    console.info('Canceled. Project Id was invalid. (showCredentialsDialog)')
    toast('Canceled')
    return
  }

  const privateKey = askUser('Private Key', validPrivateKey)

  if (!privateKey) {
    console.info('Canceled. Private Key was invalid. (showCredentialsDialog)')
    toast('Canceled')
    return
  }

  setFirestoreCredentials(clientEmail, projectId, privateKey)

  console.info('Success. (showCredentialsDialog)')
  toast('Saved')
}
