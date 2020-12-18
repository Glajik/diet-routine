import {
  IS_LOGIN_DRAWER,
  IS_SIGNUP_DRAWER,
  IS_FORGOT_PASS_DRAWER,
  ALL_CLOSE_DRAWER,
} from '../actionTypes'

const initialState = {
  islogin: false,
  isSignup: false,
  isForgotPass: false,
}

export const draweReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGIN_DRAWER:
      return {
        ...state,
        islogin: true,
        isSignup: false,
        isForgotPass: false,
      }
    case IS_SIGNUP_DRAWER:
      return {
        ...state,
        islogin: false,
        isSignup: true,
        isForgotPass: false,
      }
    case IS_FORGOT_PASS_DRAWER:
      return {
        ...state,
        islogin: false,
        isSignup: false,
        isForgotPass: true,
      }
    case ALL_CLOSE_DRAWER:
      return {
        ...state,
        islogin: false,
        isSignup: false,
        isForgotPass: false,
      }
    default:
      return state
  }
}
