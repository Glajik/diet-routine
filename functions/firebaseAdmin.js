// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');

const serviceAccount = require('./diet-routine-873104497ace.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

module.exports = admin
