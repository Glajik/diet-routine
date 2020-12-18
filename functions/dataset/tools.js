const admin = require('../firebaseAdmin')

const db = admin.firestore();
const auth = admin.auth();

const dataset = require('./dataset')

/**
 * Create new user, if not exist
 * @param {*} data 
 * @returns user
 */
const createUser = async (data) => {
  const { email } = data
  try {
    const user = await auth.getUserByEmail(email) 
    console.info(`User "${data.displayName}" is exist. Skip creating.`) 
    return user
  } catch (error) {
    const user = await auth.createUser(data)
    console.info(`New user "${data.displayName}" was created.`)
    return user
  }
}

const mapBy = (key, list) => list.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {})

async function initDataset() {
  // Create user
  const [userData] = dataset.users
  const user = await createUser(userData)

  // Create user profile
  const profilesByEmail = mapBy('email', dataset.userProfiles)
  const userProfile = profilesByEmail[user.email]
  db.collection('UserProfiles')
    .doc(user.uid)
    .set(userProfile)

  // Create categories
  const batch = db.batch();
  const categoriesRef = db.collection('Categories')
  dataset.categories.forEach(item => {
    const docRef = categoriesRef.doc(item.id)
    batch.set(docRef, item)
  })
  await batch.commit()

  // Create products 
  const productsRef = db.collection('Products')
  await Promise.all(
    dataset.products.map(data => productsRef.add(data))
  )
}

async function removeDataset() {
  const batch = db.batch();

  const user = await auth.getUserByEmail('john@example.com')

  // Delete profile
  const userProfile = db.collection('UserProfiles').doc(user.uid)
  batch.delete(userProfile)

  // Delete user
  auth.deleteUser(user.uid)

  // Delete products
  const productsQuerySnap = await db.collection('Products')
    .where('isTest', '==', true)
    .get()
  
  productsQuerySnap.forEach(doc => batch.delete(doc.ref))

  // Delete categories
  const categoriesQuerySnap = await db.collection('Categories')
    .where('isTest', '==', true)
    .get()
    
  categoriesQuerySnap.forEach(doc => batch.delete(doc.ref))

  await batch.commit()
}

exports.initDataset = initDataset
exports.removeDataset = removeDataset
