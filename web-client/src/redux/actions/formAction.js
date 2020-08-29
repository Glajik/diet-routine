import {auth} from '../../utility'
import {setModalMessage, showModal} from './modalAction'
import {
  FIELD_CHANGED,
  CLEAR_FORM,
  LOAD,
  NOT_LOAD,
  DISABLED,
  NOT_DISABLED,
  INIT_SIGN_UP_FORM,
  INIT_SIGN_IN_FORM
} from '../actionTypes'

export const initSignUpForm = () => {
  return {
    type: INIT_SIGN_UP_FORM
  }
}

export const initSignInForm = () => {
  return {
    type: INIT_SIGN_IN_FORM
  }
}

export const fieldChanged = (eventTarget) => {
  return {
    type: FIELD_CHANGED,
    payload: eventTarget
  }
}

export const submitForm = (event, fields, url, successMessage, errorMessage) => {
  return async (dispatch) => {
    dispatch({type: LOAD})
    dispatch({type: DISABLED})
    try {
      await auth(event, fields, url)
      dispatch({type: CLEAR_FORM})
      dispatch(setModalMessage(successMessage))
    } catch (e) {
      console.log(e)
      dispatch(setModalMessage(errorMessage))
    }

    dispatch({type: NOT_DISABLED})
    dispatch({type: NOT_LOAD})
    dispatch(showModal())
  }
}