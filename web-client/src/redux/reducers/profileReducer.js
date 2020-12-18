import {GET_CURRENT_USER_ID} from '../actionTypes'

const initialState = {
  currentUserId: null
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_ID:
      return {...state, currentUserId: action.payload}
    default:
      return state
  }
}