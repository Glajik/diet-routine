/**
 * I've import this FirestoreApp for comfortable autocompletion. It isn't really needed in the
 * Google Apps Script runtime and not working in online editor.
 *
 * To make this possible, I've added package via —
 *    yarn add https://github.com/grahamearley/FirestoreGoogleAppsScript.git
 *
 * and I've added next line to Firestore.ts in `node_modules/firestore_google-apps-script` —
 *    export default { getFirestore }` to Firestore.ts
 */
import FirestoreApp from 'firestore_google-apps-script'
import { getFirestoreCredentials } from './credentialsService'

/**
 * Convert Field object to plain object. Uses recursion to handle types such as
 * `mapValue` or `arrayValue`
 * @param {object} obj Field object, like `{ stringValue: "Hello world" }`
 * @returns value
 */
export function unwrapValue(obj) {
  const [first] = Object.entries(obj)
  const [type, val] = first
  switch (type) {
    case 'referenceValue':
    case 'bytesValue':
    case 'stringValue':
    case 'booleanValue':
    case 'geoPointValue':
      return val
    case 'doubleValue':
      return parseFloat(val)
    case 'integerValue':
      return parseInt(val, 10)
    case 'mapValue':
      return unwrapObject(val)
    case 'arrayValue':
      return unwrapArray(val.values)
    case 'timestampValue':
      return val
    case 'nullValue':
    default:
      return null
  }
}

/**
 * Recursive converting `mapValue` Field or whole Document to plain object.
 * @param {object} obj Document or `mapValue` object, contains `fields` prop
 */
export function unwrapObject(obj) {
  return Object.entries(obj.fields || {}).reduce(
    (o, [key, val]) => {
      o[key] = unwrapValue(val);
      return o;
    },
    {},
  )
}

/**
 * Convert `arrayValue` Field to list of plain objects
 * @param {[]} wrappedArray 
 */
export function unwrapArray(wrappedArray) {
  return wrappedArray.map(unwrapValue);
}

/**
 * Get docId from document path
 * @param {string} path 
 */
export const getDocId = (path) => {
  const [last] = path.split('/').slice(-1)
  return last
}

const docToEntry = ({ name: path, fields, createTime, updateTime }) => {
  return {
    docId: getDocId(path),
    createTime,
    updateTime,
    ...unwrapObject({ fields }),
  }
}

/**
 * Get entries from collection. Extracts field values in documents and
 * turns them into objects for further work.
 * @param {string} collection Name of collection
 * @returns {[]} Collection of object
 */
export function getEntriesFromCollection(collection) {
  const { clientEmail, privateKey, projectId } = getFirestoreCredentials()
  const firestore = FirestoreApp.getFirestore(clientEmail, privateKey, projectId)
  const documents = firestore.getDocuments(collection)
  const entries = documents.map(docToEntry)
  console.debug(`Got ${entries.length} document(s) from "${collection}" collection (getEntriesFromCollection)`)
  return entries
}
