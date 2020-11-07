import { LOAD, NOT_LOAD } from '../actionTypes'

const initialState = {
  isLoading: false,
}

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return { ...state, isLoading: true }
    case NOT_LOAD:
      return { ...state, isLoading: false }
    default:
      return { ...state }
  }
}
