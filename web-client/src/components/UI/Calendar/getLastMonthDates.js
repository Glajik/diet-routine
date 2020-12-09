import moment from 'moment'

export const getLastMonthDates = (monthsAmountFromToday, dateContext) => {
  let lastMonthDates = moment().subtract(monthsAmountFromToday + 1, 'month').daysInMonth()
  let lastMonthDatesArr = []

  const lastMonthWeekDaysDatesArr = []
  let lastMonthWeekDaysDates

  const firstDayOfCurrentMonth = +moment(dateContext).subtract(monthsAmountFromToday, 'month').startOf('month').format('d')

  for (let i = 0; i < 7; i++) {
    lastMonthWeekDaysDates = moment().startOf('isoWeek').add(i, 'days').format('d')
    lastMonthWeekDaysDatesArr.push(lastMonthWeekDaysDates)
  }

  const emptyDates = lastMonthWeekDaysDatesArr.filter(item => {
    if (firstDayOfCurrentMonth === 0) {
      if (+item !== 0) {
        return item
      }
    }

    return +item < firstDayOfCurrentMonth && +item !== 0
  })

  for (let i = 0; i < emptyDates.length; i++) {
    lastMonthDatesArr.push(lastMonthDates--)
  }

  return lastMonthDatesArr
}