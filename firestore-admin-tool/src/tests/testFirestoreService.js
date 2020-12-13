import FirestoreApp from 'firestore_google-apps-script'
import Kava from '../utils/Kava'
import { getEntriesFromCollection } from '../services/firestoreService'

/**
 * Firestore Service Integration test
 */
// eslint-disable-next-line no-unused-vars
export function testFirestoreService() {
  const t = new Kava('Testing Firestore Service')

  const collectionName = 'Testing'

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

  // Output test resuts
  console.debug(t.output)
}
