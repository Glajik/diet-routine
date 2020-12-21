import moment from 'moment'

export const getNextMonthDates = (monthsAmountFromToday) => {
  let nextMonthDates = parseInt(moment().subtract(monthsAmountFromToday - 1, 'month').startOf('month').format('D'))
  let nextMonthDatesArr = []

  const nextMonthWeekDaysDatesArr = []
  let nextMonthWeekDaysDates

  for (let i = 0; i <= 6; i++) {
    nextMonthWeekDaysDates = moment().subtract(monthsAmountFromToday - 1, 'month').startOf('month').add(i, 'days').format('d')
    if (i === 0 && +nextMonthWeekDaysDates === 1) {
      break
    }

    nextMonthWeekDaysDatesArr.push(nextMonthWeekDaysDates)

    if (+nextMonthWeekDaysDates === 0) {
      break
    }
  }

  for (let i = 0; i < nextMonthWeekDaysDatesArr.length; i++) {
    nextMonthDatesArr.push(nextMonthDates++)
  }

  return nextMonthDatesArr
}