// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import App from './App'

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rrfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  )

  expect(getByText(/Hi!/i)).toBeInTheDocument()
})
