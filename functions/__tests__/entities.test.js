/**
 * Work with emulator
 * @see https://firebase.google.com/docs/emulator-suite/connect_firestore?authuser=0
 * 
 * For Linux:
 * To use emulator you should export first env variable:
 *    export FIRESTORE_EMULATOR_HOST="localhost:8080"
 * 
 * Then run from project root (!):
 *    firebase emulators:start
 * 
 * Check:
 *    echo $FIRESTORE_EMULATOR_HOST
 * 
 * Remove:
 *    unset FIRESTORE_EMULATOR_HOST
 * 
 * firebase emulators:start --import=./.export --export-on-exit exec: './tests.sh'
 */

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
const { toPairs } = require('ramda');

const serviceAccount = require('../diet-routine-873104497ace.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

/*
Поля:
# Общие
- Имя
- Аватарка(?)
- Почта

# Форма для расчета нормы 
- Пол
- Возраст
- Вес
- Рост
- Уровень активности
  - Низкий
  - Легкий
  - Средний
  - Выше среднего
  - Высокий
- Цель
  - Уменьшение веса
  - Поддержание веса
  - Набор веса
  
# Форма для изменения нормы
- Кол-во калорий в день
- Кол-во белков, жиров и углеводов в граммах
+ Показать % соотношение, можно круговой диаграммой
+ В качестве точки отсчета принимают соотношение 25/25/50 %

# Форма для продуктов
- Название
- Калорийность на 100г
- Белки на 100г
- Жиры на 100г
- Углеводы на 100г
*/

/* Assets */

/**
 * User
 * 
 * Fields below taken from documentation (Table 1)
 * @see https://firebase.google.com/docs/auth/admin/manage-users?authuser=0#create_a_user
 */
const User = {
  email: 'john@example.com',
  emailVerified: false,
  phoneNumber: '+11234567890',
  password: 'secretPassword',
  displayName: 'John Doe',
  photoURL: 'http://www.example.com/12345678/photo.png',
  disabled: false,
}

/**
 * User Profile
 * 
 */
const UserProfile = {
  email: User.email,
  name: User.displayName,
  age: 28,
  weight: 75, // in kg
  height: 180, // in cm
  gender: 'male',
  goal: 'lose', // lose | hold | gain
  activity: 'medium', // low | light | medium | high | extra
  avatar: new Array(), // Ограничить размер 100 кб
  favorites: ['P1abcdefghijklmnopqrstuvwxyz'], /* [Product.docId, ...] */
}

/**
 * Categories of Product
 * @see https://en.wikipedia.org/wiki/Table_of_food_nutrients
 * 
 * I suggest using a real key for `docId`, like "dairy_products"
 */
const Categories = {
  dairy_products:            { name: 'Dairy products' },
  oils_fats_and_shortenings: { name: 'Oils, fats and shortenings' },
  meat_and_poultry:          { name: 'Meat and poultry' },
  fish_and_seafood:          { name: 'Fish and seafood' },
  vegetables:                { name: 'Vegetables' },
  fruits:                    { name: 'Fruits' },
  breads_cereals_and_grains: { name: 'Breads, cereals and grains' },
  soups:                     { name: 'Soups' },
  desserts_and_sweets:       { name: 'Desserts and sweets' },
  nuts_and_seeds:            { name: 'Nuts and seeds' },
  beverages:                 { name: 'Beverages' },
}


/**
 * Product's Database item
 * `calories`, `proteins`, `fats`, `carbohydrates` — Amount in gramms per 100 g of product
 * `amountUnit` — Depends from product type: "g" for "solid" type, and "ml" for "liquid"
 * `isVerified` — Verified products
 * `isStandard` — This means that this is a product from the standard base
 * 
 * Idea:
 * Удельную калорийность можно задавать не за 100 г, а за
 * 1 г — будет проще расчитывать. Пользователю же надо 
 * будет показывать значение за 100г
 */
const Product = {
  name: 'Milk',
  calories: 71.33,
  proteins: 9.9,
  fats: 2.33,
  carbohydrates: 6.5,
  type: 'liquid', // type related with amountUnit
  amountUnit: 'ml',
  category: 'dairy_products', /* Category.docId */
  tags: [''], // Not desided yet
  author: 'U1abcdefghijklmnopqrstuvwxyz', /* UserProfile.uid */
  isVerified: false,
  isStandard: true,
}


/**
 * Daily Journal item
 * 
 * Запись журнала для конкретного пользователя.
 * `isDraft` — пометка, что запись находится в корзине отобранных
 * продуктов. После того как пользователь найдет и выберет все
 * необходимые продукты, и нажмет кнопку "Done"
 */
const Journal = {
  author: 'U1abcdefghijklmnopqrstuvwxyz', /* UserProfile.uid */
  product: 'P1abcdefghijklmnopqrstuvwxyz', /* Product.docId */
  name: 'Milk',
  type: 'liquid',
  amount: 150, // Weight (in g) or volume in (ml)
  amountUnit: 'ml',
  calories: 107,
  proteins: 14.85,
  fats: 3.5,
  carbohydrates: 9.75,
  isDraft: true,
}

// Helpers

/**
 * Add documents to collection, using object keys as docId, and
 * values as document's content
 * @param {*} collectionRef 
 */
const prefillByObject = collectionRef => async (object) => {
  const db = admin.firestore();

  // Get a new write batch
  const batch = db.batch();

  // Add documents to collection with specified docId
  toPairs(object).forEach(
    ([docId, data]) => {
      const docRef = collectionRef.doc(docId)
      batch.set(docRef, data)
    })
  
  // Commit the batch
  await batch.commit()
}

/**
 * Create new user, if not exist
 * @param {*} data 
 * @returns user
 */
const createUser = async (data) => {
  const auth = admin.auth()
  const { email } = data
  try {
    const user = await auth.getUserByEmail(email) 
    console.info('User "John Doe" is exist. Skip creating.') 
    return user
  } catch (error) {
    const user = await auth.createUser(data)
    console.info('New user "John Doe" was created.')
    return user
  }
}

/**
 * Prepare database & users
 */
beforeAll(async () => {
  const db = admin.firestore();
    
  // Create Categories collection
  const prefillCategories = prefillByObject(db.collection('Categories'))
  
  await prefillCategories(Categories)

  // Create user
  const user = await createUser(User)

  // Create Profile
  db.collection('UserProfiles')
    .doc(user.uid)
    .set({ ...UserProfile, favorites: [] })

  // Create Products 
  const productsRef = db.collection('Products')

  await productsRef.add({
    ...Product,
    name: 'Cow\'s milk',
    calories: 71.33,
    proteins: 9.9,
    fats: 2.33,
    carbohydrates: 6.5,
    type: 'liquid',
    amountUnit: 'ml',
    category: 'dairy_products',
    author: null,
    isVerified: true,
    isStandard: true,
  })

  await productsRef.add({
    ...Product,
    name: 'Lobster, steamed',
    calories: 92,
    proteins: 18,
    fats: 1,
    carbohydrates: 0,
    type: 'solid',
    amountUnit: 'g',
    category: 'fish_and_seafood',
    author: null,
    isVerified: true,
    isStandard: true,
  })

  await productsRef.add({
    ...Product,
    name: 'Broccoli, steamed',
    calories: 30,
    proteins: 3,
    fats: 0,
    carbohydrates: 6,
    type: 'solid',
    amountUnit: 'g',
    category: 'vegetables',
    author: null,
    isVerified: true,
    isStandard: true,
  })
});

/**
 * Cleanup after tests
 */
afterAll(async () => {
  const db = admin.firestore();
  const auth = admin.auth()
  const batch = db.batch();

  const user = await auth.getUserByEmail('john@example.com')

  // Delete profile
  const userProfile = db.collection('UserProfiles').doc(user.uid)
  batch.delete(userProfile)

  // Delete user
  auth.deleteUser(user.uid)

  // Delete products
  const products = await db.collection('Products').listDocuments()
  products.forEach(docRef => batch.delete(docRef))

  // Delete categories
  const categories = await db.collection('Categories').listDocuments()
  categories.forEach(docRef => batch.delete(docRef))

  await batch.commit()
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
    const expectedCount = Object.keys(Categories).length
    expect(documents).toHaveLength(expectedCount)
    
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
    expect(profile.name).toBe('John Doe')
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