import moment from 'moment'
import React, {useEffect, useState} from 'react'
import {FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {useSelector} from 'react-redux'
import {Loader} from '../index'
import {useFirestoreConnect} from 'react-redux-firebase'
import {ReactComponent as GoBack} from '../../../assets/images/go-back.svg'
import {ReactComponent as GoNext} from '../../../assets/images/go-next.svg'
import {getDataOfCurrentDate} from './getDataOfCurrentDate'
import {getLastMonthDates} from './getLastMonthDates'
import {getMonthKey} from './getMonthKey'
import {getNextMonthDates} from './getNextMonthDates'
import {getWeekdayKey} from './getWekdayKey'
import {getDateData} from '../../../redux/actions/dateDataAction'
import {changeSelectedDate} from '../../../redux/actions/calendarAction'
import {changeMonthsAmountFromToday} from '../../../redux/actions/calendarAction'
import {changeCurrentYear} from '../../../redux/actions/calendarAction'
import {changeSelectedYear} from '../../../redux/actions/calendarAction'

import {
  DateWrapper,
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
  WeekDaysSpan,
  WeekDaysTd
} from './style'
import {dayInfo} from './temporaryServer'

const CalendarLayout = (props) => {
  const currentMonthForToday = moment().format('M')
  const currentMonthNum = moment().subtract(props.monthsAmountFromToday, 'month').format('M')
  const nextMonthYear = moment().subtract(props.monthsAmountFromToday - 1, 'month').format('YYYY')
  const nextMonthNum = moment().subtract(props.monthsAmountFromToday - 1, 'month').format('M')
  const lastMonthNum = moment().subtract(props.monthsAmountFromToday + 1, 'month').format('M')
  const currentYearForToday = moment().format('YYYY')
  const [isNextMonthButtonDisabled, setNextMonthButtonDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useFirestoreConnect(['Journal'])
  const journal = useSelector((state) => state.firestore.data.Journal)
  let datesInfo
  if (journal) {
    datesInfo = Object.values(journal).map(item => item)
  }

  useFirestoreConnect(['UserProfiles'])
  const dailyLimits = useSelector((state) => state.firestore.data.UserProfiles)
  let dailyLimitsInfo
  if (dailyLimits) {
    dailyLimitsInfo = Object.values(dailyLimits).map(item => item)
  }
  console.log('Daily limits: ', dailyLimits)

  const weekDaysShort = []
  let weekDay

  let selectedDateId = props.selectedDate

  useEffect(() => {
    if (+currentMonthForToday >= +nextMonthNum && +currentYearForToday >= +nextMonthYear) {
      setNextMonthButtonDisabled(false)
    } else {
      setNextMonthButtonDisabled(true)
    }

    if (dailyLimits) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }

    if (journal) {
      setIsLoading(false)
      props.getSelectedDateData(
        getDataOfCurrentDate(
          dayInfo,
          selectedDateId,
          props.currentUserId,
          datesInfo,
          dailyLimitsInfo
        )
      )
    } else {
      setIsLoading(true)
    }
  }, [
    currentMonthForToday,
    currentYearForToday,
    nextMonthNum,
    nextMonthYear,
    props.monthsAmountFromToday,
    journal,
    dailyLimits,
    datesInfo,
    dailyLimitsInfo
  ])

  for (let i = 0; i <= 6; i++) {
    weekDay = moment().startOf('isoWeek').add(i, 'days').format('dd')
    weekDaysShort.push(weekDay)
  }

  const getSelectedDateInfo = async (event, d, isCurrentMonthSelected, isLastMonthSelected, isNextMonthSelected) => {
    event.persist()

    if (isNextMonthSelected) {
      if (+currentMonthNum === 12) {
        await props.changeSelectedYearCmp(+props.currentYear + 1)
      }

      if (+nextMonthNum === 12) {
        await props.changeSelectedYearCmp(+props.currentYear)
      }
    }

    if (isLastMonthSelected) {
      if (+props.selectedYear > +props.currentYear) {
        await props.changeSelectedYearCmp(props.currentYear)
      }

      if (+lastMonthNum === 12) {
        await props.changeSelectedYearCmp(props.currentYear - 1)
      }
    }

    let isSelectedDateInTheFuture = +event.target.dataset.milliseconds > +moment().format('x')


    if (!isSelectedDateInTheFuture) {
      if (event.target.id !== props.selectedDate) {
        props.changeSelectedDateCmp(event.target.id)

        if (journal) {
          props.getSelectedDateData(
            getDataOfCurrentDate(
              dayInfo,
              event.target.id,
              props.currentUserId,
              datesInfo,
              dailyLimitsInfo
            )
          )
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
          <FormattedMessage
            id={getWeekdayKey(day)}/>
        </WeekDaysSpan>
      </WeekDaysTd>
    )
  })

  const lastBlanks = []
  const lastMonthDatesArr = getLastMonthDates(props.monthsAmountFromToday, moment())

  lastMonthDatesArr.reverse().map((item, index) => {
    return (
      lastBlanks.push(
        <LastAndNextMonthsDatesTd key={index}>
          <LastAndNextMonthsDatesSpan
            id={moment([props.selectedYear, lastMonthNum, item], moment.defaultFormat).format('x')}
            data-milliseconds={moment([props.selectedYear, lastMonthNum, item], moment.defaultFormat).format('x')}
            currentDay={moment([props.selectedYear, lastMonthNum, item], moment.defaultFormat).format('x') === props.selectedDate}
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
  const nextMonthDatesArr = getNextMonthDates(props.monthsAmountFromToday)

  nextMonthDatesArr.map((item, index) => {
    return (
      nextBlanks.push(
        <LastAndNextMonthsDatesTd key={index}>
          <LastAndNextMonthsDatesSpan
            id={moment([props.selectedYear, nextMonthNum, item], moment.defaultFormat).format('x')}
            data-milliseconds={moment([props.selectedYear, nextMonthNum, item], moment.defaultFormat).format('x')}
            currentDay={moment([props.selectedYear, nextMonthNum, item], moment.defaultFormat).format('x') === props.selectedDate}
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

  const daysInMonth = moment().subtract(props.monthsAmountFromToday, 'month').daysInMonth()
  const daysInMonthArr = []

  for (let d = 1; d <= daysInMonth; d++) {
    daysInMonthArr.push(
      <DateTd key={d + Math.random()}>
        <DateNum
          id={moment([props.currentYear, currentMonthNum, d], moment.defaultFormat).format('x')}
          data-milliseconds={moment([props.currentYear, currentMonthNum, d], moment.defaultFormat).format('x')}
          currentDay={moment([props.currentYear, currentMonthNum, d], moment.defaultFormat).format('x') === props.selectedDate}
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
      props.changeMonthsAmountFromTodayCmp(props.monthsAmountFromToday - 1)
      props.changeCurrentYearCmp(nextMonthYear)
      props.changeSelectedDateCmp(selectedDateId)
    } else {
      alert('Sorry, but we haven\'t information about the next month.')
    }
  }

  const goToLastMonth = async () => {
    setNextMonthButtonDisabled(false)
    props.changeMonthsAmountFromTodayCmp(props.monthsAmountFromToday + 1)
    const year = moment().subtract(props.monthsAmountFromToday + 1, 'month').format('YYYY')
    props.changeCurrentYearCmp(year)
    props.changeSelectedDateCmp(selectedDateId)
  }

  return (
    <>
      <DateWrapper>
        <Date>
          <GoBackBtn onClick={goToLastMonth}>
            <GoBack fill="#3DAD06"/>
          </GoBackBtn>
          <MonthYearLabel>
              <span style={{paddingRight: 5}}>
                <FormattedMessage
                  id={getMonthKey(moment()
                    .subtract(props.monthsAmountFromToday, 'month')
                    .format('MMMM'))}/>
              </span>
            <span>
                {props.currentYear}
              </span>
          </MonthYearLabel>
          <GoNextBtn
            isNextMonthButtonDisabled={isNextMonthButtonDisabled}
            onClick={goToNextMonth}>
            <GoNext fill={isNextMonthButtonDisabled ? '#bfbfbf' : '#3DAD06'}/>
          </GoNextBtn>
        </Date>
      </DateWrapper>
      <Table>
        <Tbody>
        <tr>
          <td style={{height: 152, textAlign: 'center'}}>
            {isLoading ? <Loader/> : props.children}
          </td>
        </tr>
        <DaysList>
          {weekDaysArr}
        </DaysList>
        {trElems}
        </Tbody>
      </Table>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedDate: state.calendar.selectedDate,
    currentUserId: state.profile.currentUserId,
    monthsAmountFromToday: state.calendar.monthsAmountFromToday,
    currentYear: state.calendar.currentYear,
    selectedYear: state.calendar.selectedYear
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedDateData: (data) => dispatch(getDateData(data)),
    changeSelectedDateCmp: (date) => dispatch(changeSelectedDate(date)),
    changeMonthsAmountFromTodayCmp: (amount) => dispatch(changeMonthsAmountFromToday(amount)),
    changeCurrentYearCmp: (year) => dispatch(changeCurrentYear(year)),
    changeSelectedYearCmp: (year) => dispatch(changeSelectedYear(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarLayout)