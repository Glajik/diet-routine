/**
 * Disable line `import FirestoreApp from ...` in firestoreService
 * before run test
 */
import { unwrapObject } from '../src/services/firestoreService'

test('Check converting firestore document type to plain object entry', () => {
  const doc = {
    name: '/Product/nTOspyhIB9LrILWXHSBo',
    fields: {
      name: { stringValue: 'Soup' },
      calories: { integerValue: 150 },
    },
  }

  const entry = unwrapObject(doc)

  expect(entry).toMatchObject({
    name: 'Soup',
    calories: 150,
  })
})
