import {
  IS_LOGIN_DRAWER,
  IS_SIGNUP_DRAWER,
  IS_FORGOT_PASS_DRAWER,
  ALL_CLOSE_DRAWER,
} from '../actionTypes'

export const handleLogin = () => {
  return {
    type: IS_LOGIN_DRAWER,
  }
}

export const handleSignup = () => {
  return {
    type: IS_SIGNUP_DRAWER,
  }
}

export const handleForgotPass = () => {
  return {
    type: IS_FORGOT_PASS_DRAWER,
  }
}

export const handleClose = () => {
  return {
    type: ALL_CLOSE_DRAWER,
  }
}
