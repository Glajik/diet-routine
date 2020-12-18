// Here we will combine all our reducers
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { loaderReducer } from './loaderReducer'
import { modalReducer } from './modalReducer'
import { dateDataReducer } from './dateDataReducer'
import { calendarReducer } from './calendarReducer'
import { profileReducer } from './profileReducer'
import { authReducer } from './authReducer'
import { draweReducer } from './drawerReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  modal: modalReducer,
  dateData: dateDataReducer,
  calendar: calendarReducer,
  profile: profileReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  drawer: draweReducer,
})

export default rootReducer
