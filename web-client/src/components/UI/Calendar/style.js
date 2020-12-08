import styled from 'styled-components'

export const Table = styled.table`
  box-sizing: border-box;
  width: 100%;
`

export const Thead = styled.thead``

export const DaysList = styled.tr`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 12px;
  color: #434343;
`

export const Tbody = styled.tbody``

export const WeekDaysTd = styled.td`
  display: inline-block;
  width: 14.285%;
`

export const WeekDaysSpan = styled.span`
  display: flex;
  justify-content: center;
  width: 40px;
  margin: 0 auto;
`

export const LastAndNextMonthsDatesTd = styled.td`
  display: inline-block;
  width: 14.285%;
`

export const LastAndNextMonthsDatesSpan = styled.span`
  display: flex;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${p => p.currentDay ? '#237804' : '#747474'};
  
  ${p => p.currentDay
      ? `
          border: 1px solid #3DAD06;
          border-radius: 50%;
          font-weight: 800;
        `
      : ''};
`

export const DateTd = styled.td`
  display: inline-block;
  width: 14.285%;
`

export const DateNum = styled.span`
  display: flex;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-size: 12px; 
  color: ${p => p.currentDay ? '#237804' : '#434343'};
  ${p => p.currentDay
  ? `
          border: 1px solid #3DAD06;
          border-radius: 50%;
          font-weight: 800;
        `
  : ''};
`

export const DaysRow = styled.tr`
  display: inline-block;
  width: 100%;
`

export const CalendarHeaderWrapper = styled.tr``

export const Date = styled.td`
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
  width: 76%;
  margin: 0 auto;
`

export const MonthYearLabel = styled.div`
  font-size: 18px;
  font-weight: 500; 
  color: #434343;
`

export const GoNextBtn = styled.button`
  border: none;
  background: none;
`

export const GoBackBtn = styled.button`
  border: none;
  background: none;
`