import moment from 'moment'
import React, {useState} from 'react'
import {TopBottomBarsLayout} from '../../layouts'
import {Container} from '../UI'
import {
  CalendarContentWrapper,
  CalendarHeader,
  DateNum,
  DateTd,
  DaysList,
  DaysRow,
  LastAndNextMonthsDatesSpan,
  LastAndNextMonthsDatesTd,
  Table,
  Tbody,
  Thead,
  WeekDaysSpan,
  WeekDaysTd
} from './style'

const Calendar = (props) => {
  const [dateContext] = useState(moment())
  const [today] = useState(moment())
  const [showMonthPopup, setShowMonthPopup] = useState(false)
  const [showYearPopup, setShowYearPopup] = useState(false)

  const weekDays = moment.weekdays()
  const weekDaysShort = moment.weekdaysMin()
  const months = moment.months()

  const year = () => {
    return dateContext.format('Y')
  }

  const month = () => {
    return dateContext.format('MMMM')
  }

  const daysInMonth = () => {
    return dateContext.daysInMonth()
  }

  const currentDate = () => {
    return dateContext.get('date')
  }

  const currentDay = () => {
    return dateContext.format('D')
  }

  const firstDayOfMonth = () => {
    return moment(dateContext).startOf('month').format('d')
  }

  const lastDayOfMonth = () => {
    return moment(dateContext).endOf('month').format('d')
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

  let lastMonthDates = moment().subtract(1, 'month').daysInMonth()
  let lastMonthDatesArr = []

  for (let i = 0; i < firstDayOfMonth(); i++) {
    lastMonthDatesArr.push(lastMonthDates--)
    lastMonthDatesArr.reverse()
  }

  lastMonthDatesArr.map((item, index) => {
    return (
      lastBlanks.push(
        <LastAndNextMonthsDatesTd key={index}>
          <LastAndNextMonthsDatesSpan>
            {item}
          </LastAndNextMonthsDatesSpan>
        </LastAndNextMonthsDatesTd>
      )
    )
  })

  const nextBlanks = []

  let nextMonthDates = parseInt(moment().subtract(-1, 'month').startOf('month').format('D'))
  let nextMonthDaysAmount = moment().subtract(-1, 'month').daysInMonth()
  let nextMonthDatesArr = []

  for (let i = 30; i > lastDayOfMonth() && i <= nextMonthDaysAmount; i++) {
    nextMonthDatesArr.push(nextMonthDates++)
  }

  nextMonthDatesArr.map((item, index) => {
    return (
      nextBlanks.push(
        <LastAndNextMonthsDatesTd key={index}>
          <LastAndNextMonthsDatesSpan>
            {item}
          </LastAndNextMonthsDatesSpan>
        </LastAndNextMonthsDatesTd>
      )
    )
  })

  const daysInMonthArr = []
  for (let d = 1; d <= daysInMonth(); d++) {
    const currentDayProp = (d === currentDay())
    daysInMonthArr.push(
      <DateTd key={d + Math.random()} currentDay={currentDayProp}>
        <DateNum>{d}</DateNum>
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

  return (
    <Container>
      <TopBottomBarsLayout
        title="calendar"
        history={props.history}>
        <CalendarContentWrapper>
          <Table>
            <Thead>
            <CalendarHeader>

            </CalendarHeader>
            </Thead>
            <Tbody>
            <DaysList>
              {weekDaysArr}
            </DaysList>
            {trElems}
            </Tbody>
          </Table>
        </CalendarContentWrapper>
      </TopBottomBarsLayout>
    </Container>
  )
}

export default Calendar


// import React, {useState} from 'react'
// import CalendarComponent from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import {TopBottomBarsLayout} from '../../layouts'
// import {Container} from '../UI'
// import './calendar-castomize.css'
// import {CalendarContentWrapper, CalendarWrapper} from './style'
//
// const Calendar = (props) => {
//   const [value, onChange] = useState(new Date())
//
//   return (
//     <Container>
//       <TopBottomBarsLayout
//         title="calendar"
//         history={props.history}>
//         <CalendarContentWrapper>
//           <CalendarWrapper>
//             <CalendarComponent
//               onChange={onChange}
//               value={value}
//             />
//           </CalendarWrapper>
//         </CalendarContentWrapper>
//       </TopBottomBarsLayout>
//     </Container>
//   )
// }
//
// export default Calendar