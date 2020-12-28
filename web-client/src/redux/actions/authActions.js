import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNOUT_SUCCESS,
  RESET_SUCCESS,
  RESET_ERROR,
} from '../actionTypes'

export const signIn = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS })
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, err })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS })
      })
  }
}

export const signUp = ({ email, password }) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const { uid } = result.user
      // Get username for guest
      const displayName = 'Guest'
      // Update profile
      await firebase.updateAuth({ displayName })
      // Create user profile
      await firestore.collection('UserProfiles')
        .doc(uid)
        .set({ displayName, email })
      dispatch({ type: SIGNUP_SUCCESS })
    } catch (error) {
      dispatch({ type: SIGNUP_ERROR, error })
    }
  }
}

export const resetPassword = ({ email }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    // const firestore = getFirestore()

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({ type: RESET_SUCCESS })
      })
      .catch(err => {
        dispatch({ type: RESET_ERROR, err })
      })
  }
}
