import styled from 'styled-components'

export const ProgressLineWrapper = styled.div`
  margin-bottom: ${p => !p.lastLine ? '5px' : 0};
`

export const ProgressLineData = styled.div`
  display: flex;
  justify-content: space-between;
  
  span {
    display: block;
    font-size: 10px;
  }   
`

export const ProgressLineDataType = styled.span`
  color: #262626;
`

export const ProgressLineDataValue = styled.span`
  color: #595959;
`