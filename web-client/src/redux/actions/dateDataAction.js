import {GET_DATE_DATA} from '../actionTypes'

export const getDateData = (data) => {
  console.log(data)

  return {
    type: GET_DATE_DATA,
    payload: data
  }
}