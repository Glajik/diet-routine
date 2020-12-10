// To make this possible, I've added package:
//     yarn add https://github.com/grahamearley/FirestoreGoogleAppsScript.git
// And added line: `export default { getFirestore }` to Firestore.ts
// in node_modules/firestore_google-apps-script
import FirestoreApp from 'firestore_google-apps-script'
import { getFirestoreCredentials } from './credentialsService'

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

export function unwrapObject(obj) {
  return Object.entries(obj.fields || {}).reduce(
    (o, [key, val]) => {
      o[key] = unwrapValue(val);
      return o;
    },
    {},
  )
}

export const unwrapFields = fields => unwrapObject({ fields })

export function unwrapArray(wrappedArray) {
  return wrappedArray.map(unwrapValue);
}

export const getDocId = (path) => {
  const [last] = path.split('/').slice(-1)
  return last
}

// eslint-disable-next-line no-unused-vars
export function getEntriesFromCollection(collection) {
  const { clientEmail, privateKey, projectId } = getFirestoreCredentials()
  const firestore = FirestoreApp.getFirestore(clientEmail, privateKey, projectId)
  const documents = firestore.getDocuments(collection)
  const docToEntry = ({ name, fields, createTime, updateTime }) => {
    return {
      docId: getDocId(name),
      createTime,
      updateTime,
      ...unwrapFields(fields),
    }
  }
  const entries = documents.map(docToEntry)
  console.debug(`Got ${entries.length} document(s) from "${collection}" collection (getEntriesFromCollection)`)
  return entries
}
