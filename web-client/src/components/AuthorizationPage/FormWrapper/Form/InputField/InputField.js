import React from 'react'
import { injectIntl } from 'react-intl'
import {
  InputDiv,
  LabelDiv,
  InputErrorDiv,
  FildElement,
  InputRememberPass,
} from './style'
import { FieldWrapper } from '../../../../UI/Field/style'
// import { field } from '../../../../UI/Field/Field'

const InputField = props => {
  console.log(props)
  return (
    <FieldWrapper>
      <FildElement>
        {/* <LabelDiv>
          <field label={props.intl.formatMessage({ id: 'createAccount' })} />
        </LabelDiv> */}
        <LabelDiv>Электронный адрес</LabelDiv>
        <InputDiv type="email" placeholder="example@gmail.com" />
        <InputErrorDiv>Неверный адрес!</InputErrorDiv>
      </FildElement>
      <FildElement>
        <LabelDiv>Пароль</LabelDiv>
        <InputDiv type="password" />
        <InputErrorDiv>Неверный пароль!</InputErrorDiv>
        <InputRememberPass>Забыли пароль?</InputRememberPass>
      </FildElement>
    </FieldWrapper>
  )
}

export default injectIntl(InputField)
