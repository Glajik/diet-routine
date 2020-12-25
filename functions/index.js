const functions = require('firebase-functions')

/**
 * Triggers for createdAt
 */

const setCreatedAtField = snap => {
  const createdAt = snap.createTime.toDate()
  return snap.ref.set({ createdAt, updatedAt: createdAt }, { merge: true })
}

exports.onCreateUserProfileDoc = functions.firestore
  .document('/UserProfiles/{documentId}')
  .onCreate(setCreatedAtField)

exports.onCreateProductDoc = functions.firestore
  .document('/Products/{documentId}')
  .onCreate(setCreatedAtField)

exports.onCreateJournalDoc = functions.firestore
  .document('/Journal/{documentId}')
  .onCreate(setCreatedAtField)

/**
 * Triggers for updatedAt
 */
const setUpdatedAtField = snap => {
  console.log('Updating document detected')
  // This need to avoid infinity loop.
  console.log(snap.before.data().updatedAt);
  console.log(snap.after.data().updatedAt);
  if (snap.before.data().updatedAt === snap.after.data().updatedAt) {
    console.log('Set new value to "updatedAt"', updatedAt)
    const updatedAt = changes.after.updateTime.toDate()
    const createdAt = changes.after.createdTime.toDate()
    return changes.after.ref.set({ updatedAt, createdAt }, { merge: true })
  }
  console.log('Skip the update "updatedAt" field')
  return null
}

exports.onUpdateUserProfileDoc = functions.firestore
  .document('/UserProfiles/{documentId}')
  .onUpdate(setUpdatedAtField)

exports.onUpdateProductDoc = functions.firestore
  .document('/Products/{documentId}')
  .onUpdate(setUpdatedAtField)

exports.onUpdateJournalDoc = functions.firestore
  .document('/Journal/{documentId}')
  .onUpdate(setUpdatedAtField)
