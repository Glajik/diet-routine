import {
  CHANGE_SELECTED_DATE,
  CHANGE_MONTH_AMOUNT_FROM_TODAY,
  CHANGE_CURRENT_YEAR,
  CHANGE_SELECTED_YEAR
} from '../actionTypes'

export const changeSelectedDate = (date) => {
  return {
    type: CHANGE_SELECTED_DATE,
    payload: date
  }
}

export const changeMonthsAmountFromToday = (amount) => {
  return {
    type: CHANGE_MONTH_AMOUNT_FROM_TODAY,
    payload: amount
  }
}

export const changeCurrentYear = (year) => {
  return {
    type: CHANGE_CURRENT_YEAR,
    payload: year
  }
}

export const changeSelectedYear = (year) => {
  return {
    type: CHANGE_SELECTED_YEAR,
    payload: year
  }
}