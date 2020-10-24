import styled from 'styled-components'
import {colors} from '../../../assets/colors'

const getInputPadding = (p) => {
  if (p.rightIconClassNames) {
    return '15px 45px 15px 15px'
  } else if (p.leftIconClassNames) {
    return '15px 15px 15px 45px'
  } else {
    return '15px'
  }
}

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 304px;
`

export const Label = styled.label`
  margin-bottom: 10px;
  margin-left:20px;
  color: ${p => !p.isValid && p.isTouched ? colors.error : '#666666'};
`

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  padding: ${getInputPadding};
  border: 1px solid ${p => !p.isValid && p.isTouched ? colors.error : colors.secondary};
  border-radius: 100px;
  outline: none;
  color: ${colors.inputValuePlaceholder};
  
  &::placeholder {
    color: ${colors.inputValuePlaceholder}; 
  }
`

export const Error = styled.p`
  color: ${colors.red};
  margin: 0;
  padding-top: 5px;
  padding-right: 15px;
  text-align: right;
  opacity: ${p => !p.isValid && p.isTouched ? 1 : 0};
`

export const Icon = styled.i`
  font-size: 20px;
  position: absolute;
  top: 43%;
  color: ${p => !p.isValid && p.isTouched ? colors.error : p.iconColor};
  ${p => p.rightIcon ? 'right: 15px' : 'left: 15px'};
`