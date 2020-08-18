import {auth} from '../../utility'
import {
  FOLDER_CHANGED,
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

export const folderChanged = (event) => {
  event.persist()

  return {
    type: FOLDER_CHANGED,
    payload: event
  }
}

export const submitForm = (event, folders, url) => {
  return async (dispatch) => {
    dispatch({type: LOAD})
    dispatch({type: DISABLED})
    try {
      await auth(event, folders, url)
      dispatch({type: CLEAR_FORM})
    } catch (e) {
      console.log(e)
    }
    dispatch({type: NOT_LOAD})
    dispatch({type: NOT_DISABLED})
  }
}