import FirestoreApp from 'firestore_google-apps-script'
import Kava from '../utils/Kava'
import { getFirestoreCredentials } from '../services/credentialsService'
import { getEntriesFromCollection } from '../services/firestoreService'

/**
 * Firestore Service Integration test
 */
// eslint-disable-next-line no-unused-vars
export function testFirestoreService() {
  const t = new Kava('Testing Firestore Service')

  const collectionName = 'Testing'

  const { clientEmail, privateKey, projectId } = getFirestoreCredentials()
  const firestore = FirestoreApp.getFirestore(clientEmail, privateKey, projectId)

  t.make('Create collection with document', () => {
    const content = { name: 'John', age: 42 }
    const path = collectionName
    const doc = firestore.createDocument(path, content)
    // Count of documents should be 1
    const docIds = firestore.getDocumentIds(path)
    t.isEqual(docIds.length, 1)
    // Document should contains typed fields
    t.isEqual(doc.fields.name.stringValue, 'John')
    t.isEqual(doc.fields.age.integerValue, '42')
  })

  t.make('Read documents', () => {
    const asset = {
      age: { integerValue: '42' },
      name: { stringValue: 'John' },
    }
    // Get first document from collection
    const path = collectionName
    const docs = firestore.getDocuments(path)
    const [first] = docs
    const { fields } = first
    // Should be identical
    t.compare(fields, asset, 'Document not match to reference')
  })

  /**
   * Test `getEntriesFromCollection` function,
   * that should returns list of plain objects,
   * with fields, docId and createTime and updateTime
   */
  t.make('Get entries from collection', () => {
    const [entry] = getEntriesFromCollection(collectionName)
    t.isEqual(typeof entry, 'object')
    const {
      name, age, docId, createTime, updateTime,
    } = entry
    t.isEqual(name, 'John')
    t.isEqual(age, 42)
    t.isEqual(typeof docId, 'string')
    t.isEqual(docId.length, 20)
    t.isEqual(typeof createTime, 'string')
    t.isEqual(typeof updateTime, 'string')
  })

  t.make('Update document', () => {
    const [doc] = firestore.getDocuments(collectionName)
    // Patch document
    firestore.updateDocument(doc.path, { name: 'Bill' }, true)
    // Check
    const [oldEntry] = getEntriesFromCollection(collectionName)
    t.isEqual(oldEntry.name, 'Bill')
    // Replace document
    firestore.updateDocument(doc.path, { dish: 'Fish' })
    // Check
    const [newEntry] = getEntriesFromCollection(collectionName)
    // should be new field
    t.isEqual(newEntry.dish, 'Fish', 'Should be present "dish" field')
    t.isTrue(!newEntry.name, 'Old field "name" shouldn\'t be present')
    t.isTrue(!newEntry.age, 'Old field "age" shouldn\'t be present')
    // document should has old docId
    t.isEqual(oldEntry.docId, newEntry.docId, 'document should has old docId')
  })

  t.make('Delete document and collection', () => {
    // Delete all documents
    const responses = firestore
      .getDocuments(collectionName)
      .map(doc => firestore.deleteDocument(doc.path))
    console.debug(responses)
    // Should throw, because 
    try {
      const items = firestore.getDocumentIds(collectionName)
      t.isEqual(items.length, 0, 'Collection should be unavailable')
      console.warn('So.. it isn\'t throw?')
    } catch (error) {
      console.info(`Collection "${collectionName}" is unavailable, but it's OK. (Delete document and collection)`)
    }
  })


  // Output test resuts
  console.debug(t.output)
}
