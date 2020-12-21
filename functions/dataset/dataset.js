exports.users = [
  {
    email: 'john@example.com',
    emailVerified: false,
    phoneNumber: '+11234567890',
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
  },
]

exports.userProfiles = [
  {
    email: 'john@example.com',
    displayName: 'John Doe',
    age: 28,
    weight: 75,
    height: 180,
    gender: 'male',
    goal: 'lose',
    activity: 'medium',
    photoURL: 'http://www.example.com/12345678/photo.png',
    favorites: [],
    isTest: true,
  },
]

exports.categories = [
  {
    id: 'dairy_products',
    name: 'Dairy products',
    isTest: true,
  }, {
    id: 'oils_fats_and_shortenings',
    name: 'Oils, fats and shortenings',
    isTest: true
  }, {
    id: 'meat_and_poultry',
    name: 'Meat and poultry',
    isTest: true
  }, {
    id: 'fish_and_seafood',
    name: 'Fish and seafood',
    isTest: true
  }, {
    id: 'vegetables',
    name: 'Vegetables',
    isTest: true
  }, {
    id: 'fruits',
    name: 'Fruits',
    isTest: true
  }, {
    id: 'breads_cereals_and_grains',
    name: 'Breads, cereals and grains',
    isTest: true
  }, {
    id: 'soups',
    name: 'Soups',
    isTest: true
  }, {
    id: 'desserts_and_sweets',
    name: 'Desserts and sweets',
    isTest: true
  }, {
    id: 'nuts_and_seeds',
    name: 'Nuts and seeds',
    isTest: true
  }, {
    id: 'beverages',
    name: 'Beverages',
    isTest: true
  },
]

exports.products = [
  {
    name: "Cow's milk",
    calories: 71.33,
    proteins: 9.9,
    fats: 2.33,
    carbohydrates: 6.5,
    type: 'liquid',
    amountUnit: 'ml',
    category: 'dairy_products',
    tags: [''],
    author: null,
    isVerified: true,
    isStandard: true,
    isTest: true,
  }, {
    name: 'Lobster, steamed',
    calories: 92,
    proteins: 18,
    fats: 1,
    carbohydrates: 0,
    type: 'solid',
    amountUnit: 'g',
    category: 'fish_and_seafood',
    tags: [''],
    author: null,
    isVerified: true,
    isStandard: true,
    isTest: true,
  }, {
    name: 'Broccoli, steamed',
    calories: 30,
    proteins: 3,
    fats: 0,
    carbohydrates: 6,
    type: 'solid',
    amountUnit: 'g',
    category: 'vegetables',
    tags: [''],
    author: null,
    isVerified: true,
    isStandard: true,
    isTest: true,
  },
]
