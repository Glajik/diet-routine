const functions = require('firebase-functions');

/**
 * Triggers for createdAt
 */

const setCreatedAtField = (snap) => {
  const createdAt = snap.createTime.toDate()
  return snap.ref.set({ createdAt }, { merge: true })
}

exports.onCreateUserProfileDoc = functions.firestore.document('/UserProfiles/{documentId}')
  .onCreate(setCreatedAtField)

exports.onCreateProductDoc = functions.firestore.document('/Products/{documentId}')
  .onCreate(setCreatedAtField)

exports.onCreateJournalDoc = functions.firestore.document('/Journal/{documentId}')
  .onCreate(setCreatedAtField)