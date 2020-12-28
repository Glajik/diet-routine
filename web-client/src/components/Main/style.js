import styled from 'styled-components'

export const BranchUpImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
`

export const BranchDownImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1000;
`

export const MainContentWrapper = styled.div``

export const MainPageTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 12px 0 4px;
`

export const Date = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76%;
  margin: 0 auto;
`

export const GoNextBtn = styled.button`
  border: none;
  background: none;
  height: 16px;
  cursor: ${p => p.isNextDayButtonDisabled ? 'not-allowed' : 'pointer'};
`

export const GoBackBtn = styled.button`
  border: none;
  background: none;
  height: 16px;
  cursor: pointer;
`

export const MonthYearLabel = styled.div`
  font-size: 18px;
  font-weight: 500; 
  color: #434343;
`

export const ProgressBarsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 22px;
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 128px;
`

export const ProductListWrapper = styled.div`
  height: calc(100vh - 323px);
  overflow-y: auto;
  position: relative;
  
  ${p => !p.isShadowHidden ? `
    &::after {
      content: "";
      height: 104px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
      position: fixed;
      bottom: 64px;
      left: 0;
      right: 0;
    }
  ` : ''}
`

export const ProductListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const ProductListLeftPart = styled.div`
  width: 49%;
`

export const ProductListRightPart = styled.div`
  width: 49%;
  display: flex;
  justify-content: space-between; 
  align-items: center;
`

export const ProductListDoseWrapper = styled.div`
  width: 40%;
  text-align: right;
`

export const ProductListCaloriesWrapper = styled.div`
  width: 52%;
  text-align: right;
`

export const ProductName = styled.p`
  font-size: 16px;
  color: #262626;
  margin: 0;
  max-width: 100%;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
`

export const Dose = styled.p`
  font-size: 12px;
  color: #595959;
  margin: 0;
  max-width: 100%;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
`

export const Calories = styled.p`
  font-size: 16px;
  color: #262626;
  margin: 0;
  max-width: 100%;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
`

export const CaloriesLabel = styled.span`
  font-size: 12px;
`

export const EmptyData = styled.p`
  text-align: center;
`