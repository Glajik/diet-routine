// Here we will combine all our reducers
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { loaderReducer } from './loaderReducer'
import { modalReducer } from './modalReducer'
import { dateDataReducer } from './dateDataReducer'
import { calendarReducer } from './calendarReducer'
import { profileReducer } from './profileReducer'

const rootReducer = combineReducers({
  loader: loaderReducer,
  modal: modalReducer,
  dateData: dateDataReducer,
  calendar: calendarReducer,
  profile: profileReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
})

export default rootReducer
