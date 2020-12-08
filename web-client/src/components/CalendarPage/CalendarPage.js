import React from 'react'
import {TopBottomBarsLayout} from '../../layouts'
import {Container, Calendar} from '../UI'
import {CalendarContentWrapper} from './style'

const CalendarPage = (props) => {
  return (
    <Container>
      <TopBottomBarsLayout
        title="calendar"
        history={props.history}>
        <CalendarContentWrapper>
          <Calendar/>
        </CalendarContentWrapper>
      </TopBottomBarsLayout>
    </Container>
  )
}

export default CalendarPage