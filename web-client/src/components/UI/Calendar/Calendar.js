import moment from 'moment'
import React, {useEffect, useState} from 'react'
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
import {dayInfo} from './temporaryServer'

const Calendar = () => {
  const [dateContext] = useState(moment())
  const [monthsAmountFromToday, setMonthsAmountFromToday] = useState(0)
  const [selectedDay, setSelectedDay] = useState(moment().subtract(monthsAmountFromToday, 'month').get('date'))
  const [selectedMonth, setSelectedMonth] = useState(moment().subtract(monthsAmountFromToday, 'month').format('M'))
  const [currentYear, checkToAnotherYear] = useState(moment().format('YYYY'))
  const [selectedYear, setSelectedYear] = useState(+moment().format('YYYY'))
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
    if (+currentMonthForToday >= +nextMonthNum && +currentYearForToday >= +nextMonthYear) {
      setNextMonthButtonDisabled(false)
    } else {
      setNextMonthButtonDisabled(true)
    }

    getDataOfCurrentDate(
      dayInfo,
      moment().format('LL'),
      {date: moment().format('LL'), calories: 0, water: 0}
    )
  }, [currentMonthForToday, currentYearForToday, nextMonthNum, nextMonthYear])

  for (let i = 0; i <= 6; i++) {
    weekDay = moment().startOf('isoWeek').add(i, 'days').format('dd')
    weekDaysShort.push(weekDay)
  }

  const getSelectedDateInfo = async (event, d, isCurrentMonthSelected, isLastMonthSelected, isNextMonthSelected) => {
    event.persist()

    if (isNextMonthSelected && +currentMonthNum === 12) {
      console.log(+currentMonthNum === 12)
      // if () {
      console.log('1111111111111', setSelectedYear(+currentYear + 1))
      console.log('Selected year: ', selectedYear)
      // }
    }

    if (isCurrentMonthSelected) {
      setSelectedMonth(currentMonthNum)
    } else if (isNextMonthSelected) {
      setSelectedMonth(nextMonthNum)
    } else if (isLastMonthSelected) {
      setSelectedMonth(lastMonthNum)
    }

    if (isLastMonthSelected) {
      setSelectedYear(currentYear)

      if (+lastMonthNum === 12) {
        setSelectedYear(+currentYear - 1)
      }
    }

    console.log('2222222222222222')
    let isSelectedDateInTheFuture = +event.target.dataset.milliseconds > +moment().format('x')

    console.log('Future: ', isSelectedDateInTheFuture)

    if (!isSelectedDateInTheFuture) {
      console.log('333333333333333')
      if (event.target.id !== selectedDateId) {
        if (isNextMonthSelected) {
          console.log('Current: ', +event.target.dataset.milliseconds)
          console.log('Today: ', +moment().format('x'))
        }

        setSelectedDay(d)

        getDataOfCurrentDate(
          dayInfo,
          event.target.id,
          {date: event.target.id, calories: 0, water: 0}
        )

        setSelectedDateId(event.target.id)
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
  const nextMonthDatesArr = getNextMonthDates(monthsAmountFromToday)

  nextMonthDatesArr.map((item, index) => {
    let selectedDateInMilliseconds

    if (moment([selectedYear, nextMonthNum, item], moment.defaultFormat).format('MMMM') === 'December')  {
      selectedDateInMilliseconds = moment([selectedYear + 1, nextMonthNum, item], moment.defaultFormat).format('x')
    } else {
      moment([selectedYear, nextMonthNum, item], moment.defaultFormat).format('x')
    }

    console.log(selectedDateInMilliseconds)

    return (
      nextBlanks.push(
        <LastAndNextMonthsDatesTd key={index}>
          <LastAndNextMonthsDatesSpan
            id={moment([selectedYear, nextMonthNum, item], moment.defaultFormat).format('LL')}
            data-milliseconds={selectedDateInMilliseconds}
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

  const daysInMonthArr = []
  const daysInMonth = moment().subtract(monthsAmountFromToday, 'month').daysInMonth()

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

  // const TrElems = rows.map((d, index) => {
  //   return (
  //     <DaysRow key={index}>
  //       {d}
  //     </DaysRow>
  //   )
  // })

  const TrElems = () => {
    return rows.map((d, index) => {
      return (
        <DaysRow key={index}>
          {d}
        </DaysRow>
      )
    })
  }

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
      <TrElems/>
      {/*{trElems}*/}
      </Tbody>
    </Table>
  )
}

export default Calendar