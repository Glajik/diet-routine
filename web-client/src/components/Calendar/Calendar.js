import React from 'react'
import {BottomBar, Container, TopBar} from '../UI'
import {CalendarContentWrapper} from './style'

const Calendar = (props) => {
  return (
    <Container>
      <TopBar
        pageName="calendar"
        pageHasSettings={true}
        history={props.history}/>
      <CalendarContentWrapper>
        <h2>Calendar</h2>
      </CalendarContentWrapper>
      <BottomBar
        currentPage="calendar"
        history={props.history}/>
    </Container>
  )
}

export default Calendar