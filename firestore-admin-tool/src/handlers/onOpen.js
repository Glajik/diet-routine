/* globals SpreadsheetApp */

// To make this possible, I've added package:
//     yarn add https://github.com/grahamearley/FirestoreGoogleAppsScript.git
// And added line: `export default { getFirestore }` to Firestore.ts
// in node_modules/firestore_google-apps-script
import FirestoreApp from 'firestore_google-apps-script'
import { showCredentialsDialog } from '../ui/dialogs' // eslint-disable-line
import { getFirestoreCredentials } from '../services/credentialsService'
import { updateWithEntries } from '../services/spreadsheetService'

// eslint-disable-next-line no-unused-vars
function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('Admin Tool')
    .addSubMenu(
      ui.createMenu('Products')
        .addItem('Get All', 'getProductsAndUpdateTab'),
    )
    .addSubMenu(
      ui.createMenu('Settings')
        .addItem('Set credentials', 'showCredentialsDialog'),
    )
    .addToUi()
}

const getDocId = path => path.split('/').slice(-1)

// eslint-disable-next-line no-unused-vars
function getProductsAndUpdateTab() {
  const { clientEmail, privateKey, projectId } = getFirestoreCredentials()
  const firestore = FirestoreApp.getFirestore(clientEmail, privateKey, projectId)
  const documents = firestore.getDocuments('Products')
  const entries = documents.map((doc) => {
    const { fields, createTime, updateTime, readTime } = doc
    const { name, calories } = fields
    return {
      id: getDocId(doc.name),
      name: name.stringValue,
      calories: calories.integerValue,
      createTime,
      updateTime,
    }
  })
  updateWithEntries('Products', entries)
}
