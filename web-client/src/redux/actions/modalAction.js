import {HIDE_MODAL, SET_MODAL_MESSAGE, SHOW_MODAL} from '../actionTypes'

export const showModal = () => {
  return {
    type: SHOW_MODAL
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}

export const setModalMessage = (message) => {
  return {
    type: SET_MODAL_MESSAGE,
    payload: message
  }
}