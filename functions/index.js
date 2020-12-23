const functions = require('firebase-functions')

/**
 * Triggers for createdAt
 */

const setCreatedAtField = snap => {
  const createdAt = snap.createTime.toDate()
  return snap.ref.set({ createdAt }, { merge: true })
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
  const diff = snap.after.updateTime.seconds - snap.before.updateTime.seconds
  console.log('diff', diff)
  // Skip update updatedAt field, If the time has passed since the last update less than 5 seconds.
  // This need to avoid infinity loop.
  if (diff < 5) {
    console.log(
      'The document is updated too often, skip the update "updatedAt" field'
    )
    return null
  }
  const updatedAt = snap.after.updateTime.toDate()
  return snap.after.ref.set({ updatedAt }, { merge: true })
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
