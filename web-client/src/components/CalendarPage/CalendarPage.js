import React, { useState } from 'react'
import {FormattedMessage} from 'react-intl'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { useFirestoreConnect } from 'react-redux-firebase';
import {BottomBarLayout} from '../../layouts'
import {CalendarLayout, Container} from '../UI'
import ProgressCircle from './ProgressCircle'
import ProgressLine from './ProgressLine'
import {
  CalendarContentWrapper,
  ProgressBarsWrapper,
  CalendarPageHeader,
  ProductListLinkWrapper
} from './style'

const CalendarPage = (props) => {
  // Destructuring props
  const { history } = props

  // Calendar state
  const [date, setDate] = useState(new Date())

  // Configure query to Firestore collection
  useFirestoreConnect([{
    collection: 'Journal',
    where: [
      ['isDraft', '==', false],
    ],
  }])
  
  // Data can be found in the store
  const entries = useSelector(state => state.firestore.ordered.Journal) || []
  console.log("state.firestore.ordered.Journal", entries)
  return (
    <Container>
      <BottomBarLayout
        title="calendar"
        history={history}>
        <CalendarContentWrapper>
          <CalendarPageHeader>
            <FormattedMessage id="i18n_calendar_header"/>
          </CalendarPageHeader>
          <CalendarLayout onChange={date => setDate(date)} >
            <ProgressBarsWrapper>
              <ProgressCircle/>
              <ProgressLine/>
            </ProgressBarsWrapper>
            <ProductListLinkWrapper>
              <Link
                to="/main"
                style={{color: '#262626', textDecoration: 'underline'}}>
                <FormattedMessage id="i18n_products_list_link"/>
              </Link>
            </ProductListLinkWrapper>
          </CalendarLayout>
        </CalendarContentWrapper>
      </BottomBarLayout>
    </Container>
  )
}

export default CalendarPage