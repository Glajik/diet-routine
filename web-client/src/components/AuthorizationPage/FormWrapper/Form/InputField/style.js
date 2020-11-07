import styled from 'styled-components'
import { colors } from '../../../../../assets/colors'
import { Label, Input } from '../../../../UI/Field/style'

export const InputDiv = styled(Input)`
  border: 1px solid ${colors.secondary};
  &[type='password'] {
    color: ${colors.secondary};
  }
  &[type='email'] {
    color: ${colors.secondary};
  }
  &:focus {
    border: 2px solid
      ${p => (!p.isValid && p.isTouched ? colors.secondary : colors.wrong)};
  }
`

export const LabelDiv = styled(Label)`
  margin: 4px;
  margin-left: 20px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${p => (!p.isValid && p.isTouched ? colors.secondary : colors.white)};
`
export const InputErrorDiv = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  text-align: right;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  color: ${p => (!p.isValid && p.isTouched ? colors.secondary : colors.wrong)};
`
export const FildElement = styled.span`
  margin-bottom: 20px;
`
export const InputRememberPass = styled.span`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin-left: 20px;
  color: ${p => (!p.isValid && p.isTouched ? colors.secondary : colors.white)};
`
