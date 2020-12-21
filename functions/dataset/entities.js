/* eslint-disable no-unused-vars */

/**
 * User — this is entity of Authentication, not Firestore
 * 
 * Fields below taken from documentation (Table 1)
 * @see https://firebase.google.com/docs/auth/admin/manage-users?authuser=0#create_a_user
 
 * @param {string} uid The uid to assign to the newly created user. Must be a string between 1 and 128 characters long, inclusive. If not provided, a random uid will be automatically generated.
 * @param {string} email The user's primary email. Must be a valid email address.
 * @param {boolean} emailVerified Whether or not the user's primary email is verified. If not provided, the default is false.
 * @param {string} phoneNumber The user's primary phone number. Must be a valid E.164 spec compliant phone number.
 * @param {string} password The user's raw, unhashed password. Must be at least six characters long.
 * @param {string} displayName The users' display name.
 * @param {string} photoURL The user's photo URL.
 * @param {boolean} disabled Whether or not the user is disabled. true for disabled; false for enabled. If not provided, the default is false.
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
 * User Profile — contains additional information about the user that
 * cannot be stored in Authentication, but for convience some fields
 * can be copied from there.
 * 
 * @param {string} docId Document id, should be equals to `User.uid`
 * @param {string} email Taken from `User.email`
 * @param {string} displayName Taken from `User.displayName`
 * @param {number} age Age of user
 * @param {number} weight In kg
 * @param {number} height In cm
 * @param {string} gender One from ['male', 'female']
 * @param {string} goal One from ['lose', 'hold', 'gain']
 * @param {string} activity Level of activity, one from ['low', 'light', 'medium', 'high', 'extra']
 * @param {string} photoURL Url, taken from `User.photoURL`
 * @param {[string]} favorites list of favorites products by `Product.docId`
 */
const UserProfile = {
  email: 'john@example.com', /* User.email */
  displayName: 'John Doe', /* User.displayName */
  age: 28,
  weight: 75,
  height: 180,
  gender: 'male',
  goal: 'lose',
  activity: 'medium',
  photoURL: 'http://www.example.com/12345678/photo.png', /* User.photoURL */
  favorites: ['P1abcdefghijklmnopqrstuvwxyz'], /* [Product.docId] */
}

/**
 * Category of Product
 * @see https://en.wikipedia.org/wiki/Table_of_food_nutrients
 * 
 * @param {string} docId Document id, we should use a real key for it, like "dairy_products"
 * @param {string} id Category identifier
 * @param {string} name Category name
 * 
 */
const Category = {
  id: 'dairy_products',
  name: 'Dairy products',
}

/**
 * List of possible categories
 */
const Categories = [
  { id: 'dairy_products', name: 'Dairy products' },
  { id: 'oils_fats_and_shortenings', name: 'Oils, fats and shortenings' },
  { id: 'meat_and_poultry', name: 'Meat and poultry' },
  { id: 'fish_and_seafood', name: 'Fish and seafood' },
  { id: 'vegetables', name: 'Vegetables' },
  { id: 'fruits', name: 'Fruits' },
  { id: 'breads_cereals_and_grains', name: 'Breads, cereals and grains' },
  { id: 'soups', name: 'Soups' },
  { id: 'desserts_and_sweets', name: 'Desserts and sweets' },
  { id: 'nuts_and_seeds', name: 'Nuts and seeds' },
  { id: 'beverages', name: 'Beverages' },
]

/**
 * Product — database item
 * 
 * @param {string} docId The document id, randomly generated to the newly created document
 * @param {string} name Name of product
 * @param {number} calories 
 * @param {number} proteins Amount in gramms per 100 g of product
 * @param {number} fats Amount in gramms per 100 g of product
 * @param {number} carbohydrates Amount in gramms per 100 g of product
 * @param {string} type One from ['solid', 'liquid']
 * @param {string} amountUnit Depends from product `type`, one from ['g', 'ml']
 * @param {string} category should be equals to `Category.docId`
 * @param {[string]} tags Not desided yet
 * @param {string} author Should be equals to `User.uid`
 * @param {boolean} isVerified Should be `true`, if product was verified by moderator
 * @param {boolean} isStandard Should be `true`, if this is a product from standard set
 * 
 * Idea:
 * 1. Удельную калорийность можно задавать не за 100 г, а за
 * 1 г — будет проще расчитывать. Пользователю же надо 
 * будет показывать значение за 100г. Хотя при вводе нового продукта
 * придется делить значения на 100.
 */
const Product = {
  name: 'Milk',
  calories: 71.33,
  proteins: 9.9,
  fats: 2.33,
  carbohydrates: 6.5,
  type: 'liquid',
  amountUnit: 'ml',
  category: 'dairy_products', /* Category.docId */
  tags: [''],
  author: 'U1abcdefghijklmnopqrstuvwxyz', /* UserProfile.uid */
  isVerified: false,
  isStandard: true,
}


/**
 * Journal — daily journal item
 * 
 * @param {string} docId The document id, randomly generated to the newly created document
 * @param {string} author Should be equals to `User.uid`
 * @param {string} product Should be equals to `Product.docId`
 * @param {string} name Taken from `Product.name`
 * @param {string} type Copied from `Product.type`
 * @param {string} amount Total amount (weight or volume) of product
 * @param {string} amountUnit Copied from `Product.amountUnit`
 * @param {string} calories Total amount
 * @param {string} proteins Total amount
 * @param {string} fats Total amount
 * @param {string} carbohydrates Total amount
 * @param {string} isDraft If `true`, this entry is only prepared but not added to the daily journal
 *
 * `isDraft` — пометка, что запись находится в корзине отобранных
 * продуктов. После того как пользователь найдет и выберет все
 * необходимые продукты, и нажмет кнопку "Done"
 */
const Journal = {
  author: 'U1abcdefghijklmnopqrstuvwxyz', /* User.uid */
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
