import {HIDE_MODAL, SET_MODAL_MESSAGE, SHOW_MODAL} from '../actionTypes'

const initialState = {
  isModal: false,
  message: 'message'
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {...state, isModal: true}
    case HIDE_MODAL:
      return {...state, isModal: false}
    case SET_MODAL_MESSAGE:
      return {...state, message: action.payload}
    default:
      return {...state}
  }
}