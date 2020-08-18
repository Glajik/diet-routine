import { createStore, combineReducers, compose } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import firebase from './firebase'

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
})

const rfConfig = {} // optional redux-firestore Config Options

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = withDevTools(
  reduxFirestore(firebase, rfConfig) // firebase instance as first argument, rfConfig as optional second
)(createStore)

// Create store with reducers and initial state
const initialState = {}

export default createStoreWithFirebase(rootReducer, initialState)
