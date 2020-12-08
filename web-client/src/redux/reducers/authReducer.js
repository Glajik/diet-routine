import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../actionTypes'

const initState = {
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log('NO')
      return {
        ...state,
        authError: 'Login failed',
      }
    case LOGIN_SUCCESS:
      console.log('YES')
      return {
        ...state,
        authError: null,
      }
    case SIGNOUT_SUCCESS:
      return state
    case SIGNUP_SUCCESS:
      console.log('YES')
      return {
        ...state,
        authError: null,
      }
    case SIGNUP_ERROR:
      console.log('NO')
      return {
        ...state,
        authError: action.err.message,
      }
    default:
      return state
  }
}

export default authReducer
