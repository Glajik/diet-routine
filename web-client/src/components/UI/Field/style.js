import styled from 'styled-components'
import {colors} from '../../../assets/colors'

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const Label = styled.label`
  margin-bottom: 10px;
  color: #666666;
`

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid ${colors.secondary};
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
`