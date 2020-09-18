import {LOAD, NOT_LOAD} from '../actionTypes'

export const load = () =>  {
  return {
    type: LOAD
  }
}

export const notLoad = () => {
  return {
    type: NOT_LOAD
  }
}