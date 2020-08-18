import styled from 'styled-components'
import {colors} from '../../assets/colors'

export const FormWrapper = styled.div`
  width: 600px;
  margin: 50px auto 0;
  background: ${colors.white};
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
`

export const Header = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
  color: ${colors.blue};
`

export const Navlink = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 10px;
  color: ${colors.blue};
`