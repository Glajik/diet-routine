// Here we will combine all our reducers
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { loaderReducer } from './loaderReducer'
import { modalReducer } from './modalReducer'
import  authReducer  from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  modal: modalReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
})

export default rootReducer