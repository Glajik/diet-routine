import FirestoreApp from 'firestore_google-apps-script'
import Kava from '../utils/Kava'
import { getFirestoreCredentials } from '../services/credentialsService'

/**
 * Firestore Lib API test
 */
// eslint-disable-next-line no-unused-vars
export function testFirestoreLibApi() {
  const t = new Kava('Testing Firestore Lib Api')

  const collection = 'TestFirestoreLibApi'

  const { clientEmail, privateKey, projectId } = getFirestoreCredentials()
  const firestore = FirestoreApp.getFirestore(clientEmail, privateKey, projectId)

  t.make('Create collection with document', () => {
    const doc = firestore.createDocument(collection, { name: 'John', age: 42 })
    // Count of documents should be 1
    const docIds = firestore.getDocumentIds(collection)
    t.isEqual(docIds.length, 1)
    // Document should contains typed fields
    t.isEqual(doc.fields.name.stringValue, 'John')
    t.isEqual(doc.fields.age.integerValue, '42')
  })

  t.make('Read documents', () => {
    const docs = firestore.getDocuments(collection)
    const [first] = docs
    const { age, name } = first.obj
    t.isEqual(name, 'John')
    t.isEqual(age, 42)
  })

  t.make('Update document (patch)', () => {
    const doc = firestore.createDocument(collection, { name: 'Alex' })
    // Change name
    firestore.updateDocument(doc.path, { name: 'Bill' }, true)
    const updatedDoc = firestore.getDocument(doc.path)
    const { name } = updatedDoc.obj
    t.isEqual(name, 'Bill', 'Name should be updated')
    // Add age
    firestore.updateDocument(doc.path, { age: 25 }, true)
    const updatedAgainDoc = firestore.getDocument(doc.path)
    const { name: oldName, age } = updatedAgainDoc.obj
    t.isEqual(oldName, name, 'Name shouldn\'t be touched')
    t.isEqual(age, 25, 'Age should be added')
  })

  t.make('Update document (replace)', () => {
    const doc = firestore.createDocument(collection, { name: 'Max' })
    // Replace document
    firestore.updateDocument(doc.path, { dish: 'Fish' }, false)
    const replacedDoc = firestore.getDocument(doc.path)
    const { name, dish } = replacedDoc.obj
    t.isTrue(!name, 'Old field "name" shouldn\'t be present')
    t.isEqual(dish, 'Fish', 'New field "dish" should be present')
    // Document should has old docId
    t.isEqual(doc.path, replacedDoc.path, 'Document should have same path')
  })

  t.make('Delete document and collection', () => {
    const docCountBefore = firestore.getDocumentIds(collection).length
    // Delete all documents
    const responses = firestore
      .getDocuments(collection)
      .map(doc => firestore.deleteDocument(doc.path))
    const docCountAfter = firestore.getDocumentIds(collection).length
    t.isEqual(docCountAfter, 0, 'Collection shouldn\'t contains any document after deleting')
    t.isEqual(responses.length, docCountBefore, 'Responses count should match documents count before deletion')
  })

  // Output test resuts
  console.debug(t.output)
}
