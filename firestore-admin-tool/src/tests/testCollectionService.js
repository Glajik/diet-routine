import Kava from '../utils/Kava'
import CollectionService from '../services/collectionService'

/**
 * Collection Service Integration test
 */
// eslint-disable-next-line no-unused-vars
export function testCollectionService() {
  const t = new Kava('Testing Collection Service')

  const service = new CollectionService('TestCollectionService')

  t.make('Test basic CRUD operations', () => {
    const countBefore = service.getCount()
    // Create
    const createdEntry = service.create({ car: 'Tesla' })
    t.isEqual(service.getCount(), countBefore + 1, 'Entry should be created')
    t.isFalse(!createdEntry, 'Method "create" should return entry')
    t.isEqual(createdEntry.car, 'Tesla')
    t.isTrue(createdEntry.created instanceof Date, 'Field "created" should has type "Date"')
    t.isTrue(createdEntry.updated instanceof Date, 'Field "updated" should has type "Date"')
    const { docId } = createdEntry

    // Read
    const readedEntry = service.getById(docId)
    t.isEqual(readedEntry.car, 'Tesla', 'Entry should be readed correctly')

    // Update
    service.updateById(docId, { car: 'Tesla Model X' })
    const updatedEntry = service.getById(docId)
    t.isEqual(updatedEntry.car, 'Tesla Model X', 'Entry should be updated')

    // Delete
    service.deleteById(docId)
    t.isEqual(service.getCount(), countBefore, 'Entry should be deleted')
  })

  // Output test resuts
  console.debug(t.output)
}
