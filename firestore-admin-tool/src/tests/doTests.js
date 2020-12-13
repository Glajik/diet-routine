/* eslint-disable no-unused-vars */
import testCollectionService from './testCollectionService'
import testFirestoreLibApi from './testFirestoreLibApi'

/**
 * Test runner
 */
export function doTests() {
  testFirestoreLibApi()
  testCollectionService()
}
