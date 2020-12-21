import {GET_CURRENT_USER_ID} from '../actionTypes'

export const getCurrentUserId = (id) => {
  return {
    type: GET_CURRENT_USER_ID,
    payload: id
  }
}