import styled from 'styled-components'

export const AddProductContentWrapper = styled.div`
  margin: 60px 0; 
`

export const Form = styled.form`
  position: relative;
`

export const FieldsWrapper = styled.div`
  max-height: calc(100vh - 180px);
  overflow: auto;
`

export const FieldWrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #bfbfbf;
  font-size: 16px;
  color: #262626;
  margin-bottom: 25px;
  padding: 10px 0;
  
  &::placeholder {
   color: #bfbfbf;
   font-weight: 600;
  }
    
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  } 
  
  ${p => p.proteins ? `
      text-align: right;
      padding: 10px 25px 10px 65px;
    ` : p.fats ? `
        text-align: right;
        padding: 10px 25px 10px 37px;
    ` : p.carbs ? `
        text-align: right;
        padding: 10px 25px 10px 48px;
    ` : p.calories ? `
        text-align: right;
        padding: 10px 25px 10px 65px;
    ` : ''}
`

export const Select = styled.select`
  width: 100%;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #bfbfbf;
  font-size: 16px;
  font-weight: ${p => p.value !== 'select_an_option' ? 'normal' : 600};
  font-family: 'Nunito', sans-serif;
  padding: 10px 0;
  color: ${p => p.value !== 'select_an_option' ? '#262626' : '#bfbfbf'};
  margin-bottom: 25px;
`

export const Option = styled.option`
  color: #262626;
`

export const CpfcLabel = styled.span`
  position: absolute;
  top: 7px;
  font-size: 16px;
  color: #262626;
`

export const AmountUnitLabel = styled.span`
  position: absolute;
  top: 7px;
  font-size: 16px;
  right: 0;
  color: #595959;
`

export const SaveProductButton = styled.button`
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 12px 0;
  width: 100%;
  background: #3DAD06;
  border: none;
  border-radius: 30px;
  color: #ffffff; 
  position: absolute;
  bottom: -90px;
`