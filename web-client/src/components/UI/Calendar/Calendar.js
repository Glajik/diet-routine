import React, {useState, useEffect} from 'react'
import moment from 'moment'
import {dayInfo} from './temporaryServer'
import {ReactComponent as GoBack} from '../../../assets/images/go-back.svg'
import {ReactComponent as GoNext} from '../../../assets/images/go-next.svg'

import {
  CalendarHeaderWrapper,
  Date,
  DateNum,
  DateTd,
  DaysList,
  DaysRow,
  GoBackBtn,
  GoNextBtn,
  LastAndNextMonthsDatesSpan,
  LastAndNextMonthsDatesTd,
  MonthYearLabel,
  Table,
  Tbody,
  Thead,
  WeekDaysSpan,
  WeekDaysTd
} from './style'

const Calendar = () => {
  const [dateContext] = useState(moment())
  const [monthsAmountFromToday, setMonthsAmountFromToday] = useState(0)
  const [selectedDay, setSelectedDay] = useState(moment().subtract(monthsAmountFromToday, 'month').get('date'))
  const [selectedMonth, setSelectedMonth] = useState(moment().subtract(monthsAmountFromToday, 'month').format('M'))
  const [currentYear, checkToAnotherYear] = useState(moment().format('YYYY'))
  const [selectedYear, setSelectedYear] = useState(moment().format('YYYY'))
  const currentMonthForToday = moment().format('M')
  const currentYearForToday = moment().format('YYYY')
  const currentMonthNum = moment().subtract(monthsAmountFromToday, 'month').format('M')
  const nextMonthYear = moment().subtract(monthsAmountFromToday - 1, 'month').format('YYYY')
  const nextMonthNum = moment().subtract(monthsAmountFromToday - 1, 'month').format('M')
  const [isNextMonthButtonDisabled, setNextMonthButtonDisabled] = useState(true)
  const lastMonthNum = moment().subtract(monthsAmountFromToday + 1, 'month').format('M')
  const [selectedDateId, setSelectedDateId] = useState(moment([currentYear, currentMonthNum, selectedDay], moment.defaultFormat).format('LL'))


  const weekDaysShort = []
  let weekDay

  useEffect(() => {
    if (+currentMonthForToday >= +nextMonthNum && +currentYearForToday >= +nextMonthYear)   {
      setNextMonthButtonDisabled(false)
    } else {
      setNextMonthButtonDisabled(true)
    }

    const selectedDateData = dayInfo.filter(item => {
      return item.date === moment().format('LL')
    })

    if (selectedDateData.length) {
      console.log('This date has such user\'s data: ', selectedDateData)
    } else {
      console.log('This date has no user\'s data: ', [{date: moment().format('LL'), calories: 0, water: 0}])
    }
  }, [currentMonthForToday, currentYearForToday, nextMonthNum, nextMonthYear])

  for (let i = 0; i <= 6; i++) {
    weekDay = moment().startOf('isoWeek').add(i, 'days').format('dd')
    weekDaysShort.push(weekDay)
  }

  const getSelectedDateInfo = async (event, d, isCurrentMonthSelected, isLastMonthSelected, isNextMonthSelected) => {
    event.persist()

    if (isNextMonthSelected) {
      if (+currentMonthNum === 12) {
        await setSelectedYear(+currentYear + 1)
      }
    }

    if (isLastMonthSelected || isNextMonthSelected) {
      if (+selectedYear > +currentYear) {
        await setSelectedYear(currentYear)
      }

      if (+lastMonthNum === 12) {
        setSelectedYear(currentYear)
      }
    }

    let isSelectedDateInTheFuture = +event.target.dataset.milliseconds > +moment().format('x')


    if (!isSelectedDateInTheFuture) {
      if (isCurrentMonthSelected) {
        await setSelectedMonth(currentMonthNum)
      } else if (isNextMonthSelected) {
        await setSelectedMonth(nextMonthNum)
      } else if (isLastMonthSelected) {
        await setSelectedMonth(lastMonthNum)
      }

      if (event.target.id !== selectedDateId) {
        setSelectedDay(d)
        setSelectedDateId(event.target.id)

        const selectedDateData = dayInfo.filter(item => {
            return item.date === event.target.id
        })

        if (selectedDateData.length) {
          console.log('This date has such user\'s data: ', selectedDateData)
        } else {
          console.log('This date has no user\'s data: ', [{date: event.target.id, calories: 0, water: 0}])
        }
      }
    } else {
      alert('Sorry, but we haven\'t information about the future dates')
    }
  }

  const weekDaysArr = weekDaysShort.map(day => {
    return (
      <WeekDaysTd key={day}>
        <WeekDaysSpan>
          {day}
        </WeekDaysSpan>
      </WeekDaysTd>
    )
  })

  const lastBlanks = []

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

  lastMonthDatesArr.reverse().map((item, index) => {
    return (
      lastBlanks.push(
        <LastAndNextMonthsDatesTd key={index}>
          <LastAndNextMonthsDatesSpan
            id={moment([selectedYear, lastMonthNum, item], moment.defaultFormat).format('LL')}
            data-milliseconds={moment([selectedYear, lastMonthNum, item], moment.defaultFormat).format('x')}
            currentDay={item === selectedDay && +lastMonthNum === +selectedMonth}
            onClick={(
              event,
              isCurrentMonthSelected = false,
              isLastMonthSelected = true,
              isNextMonthSelected = false
            ) => getSelectedDateInfo(event, item, isCurrentMonthSelected, isLastMonthSelected, isNextMonthSelected)}>
            {item}
          </LastAndNextMonthsDatesSpan>
        </LastAndNextMonthsDatesTd>
      )
    )
  })

  const nextBlanks = []

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

  nextMonthDatesArr.map((item, index) => {
    return (
      nextBlanks.push(
        <LastAndNextMonthsDatesTd key={index}>
          <LastAndNextMonthsDatesSpan
            id={moment([selectedYear, nextMonthNum, item], moment.defaultFormat).format('LL')}
            data-milliseconds={moment([selectedYear, nextMonthNum, item], moment.defaultFormat).format('x')}
            currentDay={item === selectedDay && +nextMonthNum === +selectedMonth}
            onClick={(
                event,
                isCurrentMonthSelected = false,
                isLastMonthSelected = false,
                isNextMonthSelected = true
              ) => getSelectedDateInfo(event, item, isCurrentMonthSelected, isLastMonthSelected, isNextMonthSelected)}>
            {item}
          </LastAndNextMonthsDatesSpan>
        </LastAndNextMonthsDatesTd>
      )
    )
  })

  const daysInMonth = moment().subtract(monthsAmountFromToday, 'month').daysInMonth()
  const daysInMonthArr = []

  for (let d = 1; d <= daysInMonth; d++) {
    daysInMonthArr.push(
      <DateTd key={d + Math.random()}>
        <DateNum
          id={moment([currentYear, currentMonthNum, d], moment.defaultFormat).format('LL')}
          data-milliseconds={moment([currentYear, currentMonthNum, d], moment.defaultFormat).format('x')}
          currentDay={d === selectedDay && currentMonthNum === selectedMonth}
          onClick={(
            event,
            isCurrentMonthSelected = true,
            isLastMonthSelected = false,
            isNextMonthSelected = false
          ) => getSelectedDateInfo(event, d, isCurrentMonthSelected, isLastMonthSelected, isNextMonthSelected)}>
          {d}
        </DateNum>
      </DateTd>
    )
  }

  const totalSlots = [...lastBlanks, ...daysInMonthArr, ...nextBlanks]
  let rows = []
  let cells = []

  totalSlots.forEach((row, index) => {
    if ((index % 7) !== 0) {
      cells.push(row)
    } else {
      const insertRow = cells.slice()
      rows.push(insertRow)
      cells = []
      cells.push(row)
    }

    if (index === totalSlots.length - 1) {
      const insertRow = cells.slice()
      rows.push(insertRow)
    }
  })

  const trElems = rows.map((d, index) => {
    return (
      <DaysRow key={index}>
        {d}
      </DaysRow>
    )
  })

  const goToNextMonth = async () => {
    if (!isNextMonthButtonDisabled) {
      setMonthsAmountFromToday(monthsAmountFromToday - 1)
      checkToAnotherYear(nextMonthYear)
      setSelectedMonth(nextMonthNum)
      setSelectedDay(moment().subtract(monthsAmountFromToday - 1, 'month').get('date'))
    } else {
      alert('Sorry, but we haven\'t information about the next month.')
    }
  }

  const goToLastMonth = () => {
    setNextMonthButtonDisabled(false)
    setMonthsAmountFromToday(monthsAmountFromToday + 1)
    const year = moment().subtract(monthsAmountFromToday + 1, 'month').format('YYYY')
    checkToAnotherYear(year)
    setSelectedMonth(moment().subtract(monthsAmountFromToday + 1, 'month').format('M'))
    setSelectedDay(moment().subtract(monthsAmountFromToday + 1, 'month').get('date'))
  }

  return (
    <Table>
      <Thead>
        <CalendarHeaderWrapper>
          <Date>
            <GoBackBtn onClick={goToLastMonth}>
              <GoBack fill="#3DAD06"/>
            </GoBackBtn>
            <MonthYearLabel>
              <span style={{paddingRight: 5}}>
                {moment().subtract(monthsAmountFromToday, 'month').format('MMMM')}
              </span>
              <span>
                {currentYear}
              </span>
            </MonthYearLabel>
            <GoNextBtn onClick={goToNextMonth}>
              <GoNext fill={isNextMonthButtonDisabled ? '#bfbfbf' : '#3DAD06'}/>
            </GoNextBtn>
          </Date>
        </CalendarHeaderWrapper>
      </Thead>
      <Tbody>
        <DaysList>
          {weekDaysArr}
        </DaysList>
        {trElems}
      </Tbody>
    </Table>
  )
}

export default Calendar