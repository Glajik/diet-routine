import moment from 'moment'
import {
  CHANGE_SELECTED_DATE,
  CHANGE_MONTH_AMOUNT_FROM_TODAY,
  CHANGE_CURRENT_YEAR,
  CHANGE_SELECTED_YEAR,
  CHANGE_SELECTED_MONTH
} from '../actionTypes'

const currentYearForToday = moment().format('YYYY')
const currentMonthNum = moment().format('M')
const selectedDay = moment().format('D')

const initialState = {
  selectedDate: moment([currentYearForToday, currentMonthNum, selectedDay], moment.defaultFormat).format('x'),
  selectedDateNum: moment([currentYearForToday, currentMonthNum, selectedDay], moment.defaultFormat).format('D'),
  monthsAmountFromToday: 0,
  selectedMonth: moment().format('MMMM'),
  currentYear: moment().format('YYYY'),
  selectedYear: moment().format('YYYY')
}

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
        selectedDateNum: moment(action.payload, "x").format('D'),
        selectedMonth: moment(action.payload, "x").format('MMMM')
      }
    case CHANGE_MONTH_AMOUNT_FROM_TODAY:
      return {...state, monthsAmountFromToday: action.payload}
    case CHANGE_CURRENT_YEAR:
      return {...state, currentYear: action.payload}
    case CHANGE_SELECTED_YEAR:
      return {...state, selectedYear: action.payload}
    case CHANGE_SELECTED_MONTH:
      return {...state, selectedMonth: moment(action.payload, "x").format('MMMM')}
    default:
      return state
  }
}