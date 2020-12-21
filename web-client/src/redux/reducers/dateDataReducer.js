import {GET_DATE_DATA} from '../actionTypes'

const initialState = {
  selectedDateData: []
}

export const dateDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE_DATA:
      return {...state, selectedDateData: action.payload}
    default:
      return state
  }
}