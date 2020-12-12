// import sinon from 'sinon'

/**
 * Stub for `Utilities.newBlob(value).getDataAsString()`
 * Should be before imports functions for test.
 */
global.Utilities = {
  newBlob: value => ({
    getDataAsString: () => String(value),
  }),
}

// eslint-disable-next-line import/first
import { matchTypes } from '../src/services/spreadsheetService'

test('Check converting plain object entry to rowValues by scheme', () => {
  const schema = {
    User: [
      { name: 'firstname', type: 'text' },
      { name: 'age', type: 'numeric' },
      { name: 'address', type: 'json' },
      { name: 'photo', type: 'blob' },
      { name: 'link', type: 'url' },
      { name: 'created', type: 'timestamp' },
    ],
  }

  const user = {
    firstname: 'John',
    age: 25,
    address: { city: 'New York', street: '200 Park Ave' },
    photo: [1, 2, -5, -127, 43, 0, -78, 105],
    link: 'https://www.example.com',
    created: '2020-12-02T15:45:02.12345Z',
  }

  // Convert entry to row values
  const fromFields = fields => entry => {
    const byField = matchTypes(entry)
    return fields.map(byField)
  }

  const toRowValues = fromFields(schema.User)
  const rowValues = toRowValues(user)

  // Checking the sequence and result of type conversions
  const [firstname, age, address, photo, link, created] = rowValues

  expect(firstname).toBe('John')
  expect(age).toBe(25)
  expect(address).toBe('{"city":"New York","street":"200 Park Ave"}')
  expect(photo).toBe('1,2,-5,-127,43,0,-78,105')
  expect(link).toBe('=HYPERLINK("https://www.example.com", "Link")')
  expect(created instanceof Date).toBeTruthy()
  expect(created.getTime()).toEqual(new Date('2020-12-02T15:45:02.12345Z').getTime())
})
