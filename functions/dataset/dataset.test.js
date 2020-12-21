const admin = require('../firebaseAdmin')
const dataset = require('./dataset')
const { initDataset, removeDataset } = require('./tools')

/**
 * Prepare database & users
 */
beforeAll(async () => {
  await initDataset()
});

/**
 * Cleanup after tests
 */
afterAll(async () => {
  await removeDataset()
});

describe('Check entities creation', () => {
  const db = admin.firestore();
  const auth = admin.auth()

  test('Check if collection "Categories" was created', async () => {
    // Get all collections
    const collections = await db.listCollections()
    // Extract collection names
    const names = collections.map(ref => ref.id)
    // Check, if 'Categories' is there
    expect(names).toContain('Categories')
  })

  test('Check if collection "Categories" has documents', async () => {
    // Get collection reference (no need await)
    const collectionRef = db.collection('Categories')
    // List all documents in collection 
    const documents = await collectionRef.listDocuments()
    // Check count
    expect(documents).toHaveLength(dataset.categories.length)
    
    // Get document reference by id (no need await)
    const docRef = collectionRef.doc('desserts_and_sweets')
    // Get document snapshot
    const docSnap = await docRef.get()
    // Extract document content (no need await)
    const sweets = docSnap.data()
    // Check
    expect(sweets).not.toBeUndefined()
    expect(sweets.name).toBe('Desserts and sweets')
  })
      
  test('Check if User & User Profile is exist', async () => {
    const user = await auth.getUserByEmail('john@example.com')
    expect(user).not.toBeNull()
    
    const docSnap = await db.collection('UserProfiles').doc(user.uid).get()
    const profile = docSnap.data()
    expect(profile).not.toBeUndefined()
    expect(profile.email).toBe('john@example.com')
    expect(profile.displayName).toBe('John Doe')
  })

  test('Check if Products is exist', async () => {
    const productsRef = db.collection('Products')
    const documents = await productsRef.listDocuments()
    expect(documents).toHaveLength(3)

    // Use query to take solid products
    const querySnap = await productsRef.where('type', '==', 'solid').get()
    // You can use "empty" prop
    expect(querySnap.empty).toBeFalsy()
    // You also can get size of selection
    expect(querySnap.size).toBe(2)
    // Get document data from selection
    const productNames = querySnap.docs.map(item => {
      const { name } = item.data()
      return name
    })
    expect(productNames).toContain('Broccoli, steamed')
    expect(productNames).toContain('Lobster, steamed')
    expect(productNames).not.toContain('Cow\'s milk')
  })

  test('Check if Journal items is exist', async () => {
    const journalRef = db.collection('Journal')
    const documents = await journalRef.listDocuments()
    expect(documents).toHaveLength(4)
  })

  test('Ensure that Authentication can\'t store additional fields', async () => {
    const user = await auth.createUser({
      email: 'test2325@example.com',
      displayName: 'Big Franky',
      weight: 120,
    })

    // You cannot get weight
    expect(user.weight).not.toBe(120)
    expect(user.weight).toBeUndefined()

    // Delete user
    await auth.deleteUser(user.uid)
  })
})
