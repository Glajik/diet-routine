import { createStore, applyMiddleware, compose } from 'redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import firebase from './firebase'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
import { getFirebase } from 'react-redux-firebase'


const rfConfig = {} // optional redux-firestore Config Options

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = withDevTools(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  // firebase instance as first argument, rfConfig as optional second
  reduxFirestore(firebase, rfConfig)
)(createStore)

// Create store with reducers and initial state
const initialState = {}

export default createStoreWithFirebase(rootReducer, initialState)
