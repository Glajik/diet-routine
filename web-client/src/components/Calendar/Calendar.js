import React from 'react'
import {TopBottomBarsLayout} from '../../layouts'
import {Container} from '../UI'
import {CalendarContentWrapper} from './style'

const Calendar = (props) => {
  return (
    <Container>
      <TopBottomBarsLayout
        title="calendar"
        settingsAction={() => console.log('Calendar')}
        history={props.history}>
        <CalendarContentWrapper>
          <h2>Calendar</h2>
        </CalendarContentWrapper>
      </TopBottomBarsLayout>
    </Container>
  )
}

export default Calendar