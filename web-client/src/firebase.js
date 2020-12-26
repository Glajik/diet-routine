import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBIRNMdmhRvjersBGsJDfNLD5uICKQYSpU',
  authDomain: 'diet-routine.firebaseapp.com',
  databaseURL: 'https://diet-routine.firebaseio.com',
  projectId: 'diet-routine',
  storageBucket: 'diet-routine.appspot.com',
  messagingSenderId: '227735922611',
  appId: '1:227735922611:web:660e4077f234e69ed20dc6',
  measurementId: 'G-4GNZK80YE4',
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

export default firebase
