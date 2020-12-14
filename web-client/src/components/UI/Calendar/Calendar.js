import React, {useEffect, useState} from 'react'
import moment from 'moment'
import {dayInfo} from './temporaryServer'
import {FormattedMessage} from 'react-intl'
import {ReactComponent as GoBack} from '../../../assets/images/go-back.svg'
import {ReactComponent as GoNext} from '../../../assets/images/go-next.svg'
import {getDataOfCurrentDate} from './getDataOfCurrentDate'
import {getLastMonthDates} from './getLastMonthDates'
import {getMonthKey} from './getMonthKey'
import {getNextMonthDates} from './getNextMonthDates'
import {getWeekdayKey} from './getWekdayKey'

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

    getDataOfCurrentDate(
      dayInfo,
      selectedDateId,
      {date: moment().subtract(monthsAmountFromToday, 'month').format('LL'), calories: 0, water: 0}
    )
  }, [
    currentMonthForToday,
    currentYearForToday,
    nextMonthNum,
    nextMonthYear,
    monthsAmountFromToday
  ])

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

      if (+nextMonthNum === 12) {
        await setSelectedYear(+currentYear)
      }
    }

    if (isLastMonthSelected) {
      if (+selectedYear > +currentYear) {
        await setSelectedYear(currentYear)
      }

      if (+lastMonthNum === 12) {
        await setSelectedYear(currentYear)
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

        getDataOfCurrentDate(
          dayInfo,
          event.target.id,
          {date: event.target.id, calories: 0, water: 0}
        )
      }
    } else {
      alert('Sorry, but we haven\'t information about the future dates')
    }
  }

  const weekDaysArr = weekDaysShort.map(day => {
    return (
      <WeekDaysTd key={day}>
        <WeekDaysSpan>
          <FormattedMessage
            id={getWeekdayKey(day)}/>
        </WeekDaysSpan>
      </WeekDaysTd>
    )
  })

  const lastBlanks = []
  const lastMonthDatesArr = getLastMonthDates(monthsAmountFromToday, dateContext)

  lastMonthDatesArr.reverse().map((item, index) => {
    return (
      lastBlanks.push(
        <LastAndNextMonthsDatesTd key={index}>
          <LastAndNextMonthsDatesSpan
            id={moment([selectedYear, lastMonthNum, item], moment.defaultFormat).format('LL')}
            data-milliseconds={moment([selectedYear, lastMonthNum, item], moment.defaultFormat).format('x')}
            currentDay={item === +selectedDay && +lastMonthNum === +selectedMonth}
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
  const nextMonthDatesArr = getNextMonthDates(monthsAmountFromToday)

  nextMonthDatesArr.map((item, index) => {
    return (
      nextBlanks.push(
        <LastAndNextMonthsDatesTd key={index}>
          <LastAndNextMonthsDatesSpan
            id={moment([selectedYear, nextMonthNum, item], moment.defaultFormat).format('LL')}
            data-milliseconds={moment([selectedYear, nextMonthNum, item], moment.defaultFormat).format('x')}
            currentDay={item === +selectedDay && +nextMonthNum === +selectedMonth}
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
          currentDay={d === +selectedDay && currentMonthNum === selectedMonth}
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
      setSelectedDateId(moment().subtract(monthsAmountFromToday - 1, 'month').format('LL'))
      setSelectedDay(moment().subtract(monthsAmountFromToday - 1, 'month').format('D'))
    } else {
      alert('Sorry, but we haven\'t information about the next month.')
    }
  }

  const goToLastMonth = async () => {
    setNextMonthButtonDisabled(false)
    setMonthsAmountFromToday(monthsAmountFromToday + 1)
    const year = moment().subtract(monthsAmountFromToday + 1, 'month').format('YYYY')
    checkToAnotherYear(year)
    setSelectedMonth(moment().subtract(monthsAmountFromToday + 1, 'month').format('M'))
    setSelectedDateId(moment().subtract(monthsAmountFromToday + 1, 'month').format('LL'))
    setSelectedDay(moment().subtract(monthsAmountFromToday + 1, 'month').format('D'))
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
                <FormattedMessage
                  id={getMonthKey(moment()
                    .subtract(monthsAmountFromToday, 'month')
                    .format('MMMM'))}/>
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