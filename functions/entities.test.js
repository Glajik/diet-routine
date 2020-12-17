/**
 * Work with emulator
 * @see https://firebase.google.com/docs/emulator-suite/connect_firestore?authuser=0
 * 
 * For Linux:
 * To use emulator you should export first env variable:
 *    export FIRESTORE_EMULATOR_HOST="localhost:8080"
 * 
 * Then run:
 *    firebase emulators:start
 * 
 * Check:
 *    echo $FIRESTORE_EMULATOR_HOST
 * 
 * Remove:
 *    unset FIRESTORE_EMULATOR_HOST
 */

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');

const serviceAccount = require('./diet-routine-873104497ace.json')

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
 * User Profile
 * 
 * `uid` — Document `docId` should be the same
 */
const UserProfile = {
  uid: 'U1abcdefghijklmnopqrstuvwxyz',
  email: 'john@example.com',
  name: 'John',
  age: 28,
  weight: 75, // in kg
  height: 180, // in cm
  gender: 'male',
  goal: 'lose', // lose | hold | gain
  activity: 'medium', // low | light | medium | high | extra
  avatar: new Blob(), // Ограничить размер 100 кб
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
