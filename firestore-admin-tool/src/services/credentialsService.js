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

  return JSON.parse(json)
}
