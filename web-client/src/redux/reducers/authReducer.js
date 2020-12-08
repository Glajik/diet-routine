import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  RESET_SUCCESS,
  RESET_ERROR,
} from '../actionTypes'

const initState = {
  authError: null,
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login failed',
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      }
    case SIGNOUT_SUCCESS:
      return state
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message,
      }
    case RESET_SUCCESS:
      return state
    case RESET_ERROR:
      return {
        ...state,
        authError: action.err.message,
      }
    default:
      return state
  }
}
