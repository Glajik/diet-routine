import moment from 'moment'
import {
  CHANGE_SELECTED_DATE,
  CHANGE_MONTH_AMOUNT_FROM_TODAY,
  CHANGE_CURRENT_YEAR,
  CHANGE_SELECTED_YEAR
} from '../actionTypes'

const currentYearForToday = moment().format('YYYY')
const currentMonthNum = moment().format('M')
const selectedDay = moment().format('D')

const initialState = {
  selectedDate: moment([currentYearForToday, currentMonthNum, selectedDay], moment.defaultFormat).format('LL'),
  monthsAmountFromToday: 0,
  currentYear: moment().format('YYYY'),
  selectedYear: moment().format('YYYY')
}

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_DATE:
      return {...state, selectedDate: action.payload}
    case CHANGE_MONTH_AMOUNT_FROM_TODAY:
      return {...state, monthsAmountFromToday: action.payload}
    case CHANGE_CURRENT_YEAR:
      return {...state, currentYear: action.payload}
    case CHANGE_SELECTED_YEAR:
      return {...state, selectedYear: action.payload}
    default:
      return state
  }
}