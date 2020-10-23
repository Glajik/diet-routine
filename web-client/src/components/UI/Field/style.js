import styled from 'styled-components'
import { colors } from '../../../assets/colors'

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 304px;
`

export const Label = styled.label`
  margin-bottom: 10px;
  margin-left: 20px;
  color: #666666;
  transform: translate(10%, 0);
  animation: label-animation 4s;

  @keyframes label-animation {
    0% {
      transform: translate(10%, 300%);
      font-size: 35px;
    }

    100% {
      transform: translate(10%, 0);
    }
  }
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
