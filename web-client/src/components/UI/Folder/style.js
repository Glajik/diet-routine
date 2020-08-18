import styled from 'styled-components'
import {colors} from '../../../assets/colors'

export const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const Label = styled.label`
  margin-bottom: 10px;
  color: #666666;
`

export const Input = styled.input`
  font-size: 16px;
  box-sizing: border-box;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 7px;
  outline: none;
`

export const Error = styled.p`
  color: ${colors.red};
  margin: 0;
  padding-top: 5px;
`