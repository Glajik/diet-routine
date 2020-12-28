import moment from 'moment'
import React, {useEffect, useState, useRef} from 'react'
import {connect, useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import {branchUp, branchDown} from '../../assets'
import {ReactComponent as GoBack} from '../../assets/images/go-back.svg'
import {ReactComponent as GoNext} from '../../assets/images/go-next.svg'
import {BottomBarLayout} from '../../layouts'
import {changeMonthsAmountFromToday, changeSelectedDate, changeSelectedMonth} from '../../redux/actions/calendarAction'
import {getDateData} from '../../redux/actions/dateDataAction'
import ProgressCircle from '../CalendarPage/ProgressCircle/ProgressCircle'
import ProgressLine from '../CalendarPage/ProgressLine/ProgressLine'
import {Container, Loader} from '../UI'
import {getDataOfCurrentDate} from '../UI/CalendarLayout/getDataOfCurrentDate'

import {
  Calories,
  CaloriesLabel,
  Date,
  Dose,
  GoBackBtn,
  GoNextBtn,
  LoaderWrapper,
  MainContentWrapper,
  MainPageTitle,
  MonthYearLabel,
  ProductListCaloriesWrapper,
  ProductListDoseWrapper,
  ProductListItemWrapper,
  ProductListLeftPart,
  ProductListRightPart,
  ProductListWrapper,
  ProductName,
  ProgressBarsWrapper,
  EmptyData,
  BranchUpImage,
  BranchDownImage
} from './style'

const Main = (props) => {
  const [isNextDayButtonDisabled, setIsNextDayButtonDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isShadowHidden, setIsShadowHidden] = useState(false)
  const nextDay = moment(props.selectedDate, 'x').subtract(-1, 'days').format('x')
  const lastDay = moment(props.selectedDate, 'x').subtract(1, 'days').format('x')
  const today = moment().format('x')

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

  const productListRef = useRef(null)

  useEffect(() => {
    if (!productListRef) {
      return
    }
    const isTheEndOfProductList = productListRef.scrollHeight - productListRef.scrollTop === productListRef.clientHeight
    const isProductListOverflow = productListRef.scrollHeight > productListRef.offsetHeight

    if (isProductListOverflow && !isTheEndOfProductList) {
      setIsShadowHidden(false)
    } else {
      setIsShadowHidden(true)
    }

    const monthAmountFromToday = +moment().format('M') - +moment(props.selectedDate, 'x').format('M')
    props.changeMonthsAmountFromTodayCmp(monthAmountFromToday)
    props.changeSelectedMonthCmp(props.selectedDate)

    if (+nextDay > +today) {
      setIsNextDayButtonDisabled(true)
    } else {
      setIsNextDayButtonDisabled(false)
    }

    if (dailyLimits) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }

    if (datesInfo && dailyLimitsInfo) {
      props.getDateDataCmp(
        getDataOfCurrentDate(
          props.selectedDate,
          props.currentUserId,
          datesInfo,
          dailyLimitsInfo
        )
      )
    }
  }, [datesInfo, dailyLimitsInfo])

  const goToNextDay = () => {
    if (+nextDay < +today) {
      props.changeSelectedDateCmp(nextDay)
      props.changeSelectedMonthCmp(nextDay)
    }
  }

  const goToLastDay = () => {
    props.changeSelectedDateCmp(lastDay)
    props.changeSelectedMonthCmp(lastDay)
  }

  let selectedDateData

  if (datesInfo && dailyLimitsInfo) {
    selectedDateData = getDataOfCurrentDate(
      props.selectedDate,
      props.currentUserId,
      datesInfo,
      dailyLimitsInfo
    )
  }

  const scrolled = (event) => {
    const isTheEndOfProductList = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight

    if (isTheEndOfProductList) {
      setIsShadowHidden(true)
    } else {
      setIsShadowHidden(false)
    }
  }

  return (
    <Container>
      <BottomBarLayout history={props.history}>
        <MainContentWrapper>
          <BranchUpImage src={branchUp}/>
          <BranchDownImage src={branchDown}/>
          <div>
            <MainPageTitle>Today</MainPageTitle>
            <Date>
              <GoBackBtn onClick={goToLastDay}>
                <GoBack fill="#3DAD06"/>
              </GoBackBtn>
              <MonthYearLabel>
              <span style={{paddingRight: 5}}>
                {moment(props.selectedDate, 'x').format('MMMM')}
              </span>
                <span>
                {props.selectedDateNum}
              </span>
              </MonthYearLabel>
              <GoNextBtn
                onClick={goToNextDay}
                isNextMonthButtonDisabled={isNextDayButtonDisabled}>
                <GoNext fill={isNextDayButtonDisabled ? '#bfbfbf' : '#3DAD06'}/>
              </GoNextBtn>
            </Date>
            <ProgressBarsWrapper>
              {!isLoading ?
                (
                  <>
                    <ProgressCircle barWidth={128}/>
                    <ProgressLine/>
                  </>
                ) : (
                  <LoaderWrapper>
                    <Loader/>
                  </LoaderWrapper>
                )
              }
            </ProgressBarsWrapper>
          </div>
          <ProductListWrapper
            isShadowHidden={isShadowHidden}
            onScroll={scrolled}
            ref={productListRef}>
            {selectedDateData && selectedDateData.products.length ? selectedDateData.products.map((item, index) => (
              <ProductListItemWrapper key={index}>
                <ProductListLeftPart>
                  <ProductName>
                    {item.name}
                  </ProductName>
                </ProductListLeftPart>
                <ProductListRightPart>
                  <ProductListDoseWrapper>
                    <Dose>
                      {item.amount} {item.amountUnit}
                    </Dose>
                  </ProductListDoseWrapper>
                  <ProductListCaloriesWrapper>
                    <Calories>
                      {+item.calories.toFixed()} <CaloriesLabel>kcal</CaloriesLabel>
                    </Calories>
                  </ProductListCaloriesWrapper>
                </ProductListRightPart>
              </ProductListItemWrapper>
            )) : (
              <EmptyData>
                We haven't information about your list of products for this day, because you haven't used our app during this day(
              </EmptyData>
            )}
          </ProductListWrapper>
        </MainContentWrapper>
      </BottomBarLayout>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedDate: state.calendar.selectedDate,
    currentUserId: state.profile.currentUserId,
    selectedMonth: state.calendar.selectedMonth,
    selectedYear: state.calendar.selectedYear,
    selectedDateNum: state.calendar.selectedDateNum,
    monthsAmountFromToday: state.calendar.monthsAmountFromToday
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDateDataCmp: (data) => dispatch(getDateData(data)),
    changeSelectedDateCmp: (date) => dispatch(changeSelectedDate(date)),
    changeMonthsAmountFromTodayCmp: (amount) => dispatch(changeMonthsAmountFromToday(amount)),
    changeSelectedMonthCmp: (date) => dispatch(changeSelectedMonth(date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)