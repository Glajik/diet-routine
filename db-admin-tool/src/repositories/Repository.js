/**
 * I've import this FirestoreApp for comfortable autocompletion. It isn't really needed in the
 * Google Apps Script runtime and not working in online editor.
 *
 * To make this possible, I've added package via —
 *    yarn add https://github.com/grahamearley/FirestoreGoogleAppsScript.git
 *
 * and I've added next line to Firestore.ts in `node_modules/firestore_google-apps-script` —
 *    export default { getFirestore }
 *
 * and also added next line to it's package.json
 *    "main": "Firestore.ts",
 *
 * P.S. Maybe you should do this every time when you add or remove a packages
 */
import FirestoreApp from 'firestore_google-apps-script'
import { getFirestoreCredentials } from '../services/credentialsService'

class Repository {
  constructor(collection) {
    this.collection = collection
    const { clientEmail, privateKey, projectId } = getFirestoreCredentials()
    this.firestore = FirestoreApp.getFirestore(clientEmail, privateKey, projectId)
  }

  /**
   * Make path to document in current collection
   * @param {string} docId 
   */
  getPath(docId) {
    return `${this.collection}/${docId}`
  }

  getAllIds() {
    return this.firestore.getDocumentIds(this.collection)
  }

  getAll() {
    return this.firestore.getDocuments(this.collection)
  }

  getById(docId) {
    const path = this.getPath(docId)
    return this.firestore.getDocument(path)
  }

  getCount() {
    return this.getAllIds().length
  }

  create(data) {
    return this.firestore.createDocument(this.collection, data)
  }

  updateById(docId, data) {
    const path = this.getPath(docId)
    return this.firestore.updateDocument(path, data, true)
  }

  replaceById(docId, data) {
    const path = this.getPath(docId)
    return this.firestore.updateDocument(path, data, false)
  }

  deleteById(docId) {
    const path = this.getPath(docId)
    return this.firestore.deleteDocument(path)
  }
}

export default Repository
