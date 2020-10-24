import styled from 'styled-components'
import { colors } from '../../../../../assets/colors'
import { Label, Input, Error } from '../../../../UI/Field/style'

export const InputDiv = styled(Input)`
  &[type='password'] {
    color: ${p => (!p.isValid && p.isTouched ? colors.error : colors.secondary)};
  }
  &[type='email'] {
    color: ${p => (!p.isValid && p.isTouched ? colors.error : colors.secondary)};
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
  color: ${p => (!p.isValid && p.isTouched ? colors.error : colors.white)};
`
export const InputErrorDiv = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  text-align: right;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  color: ${p => (!p.isValid && p.isTouched ? colors.error : colors.wrong)};
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
  color: ${p => (!p.isValid && p.isTouched ? colors.error : colors.white)};
`
