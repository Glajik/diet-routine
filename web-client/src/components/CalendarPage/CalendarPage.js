import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Link} from 'react-router-dom'
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
  return (
    <Container>
      <BottomBarLayout
        title="calendar"
        history={props.history}>
        <CalendarContentWrapper>
          <CalendarPageHeader>
            <FormattedMessage id="i18n_calendar_header"/>
          </CalendarPageHeader>
          <CalendarLayout>
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