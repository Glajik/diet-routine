import React from 'react'
import { injectIntl } from 'react-intl'
import { InputDiv, LabelDiv, InputErrorDiv, FildElement } from './style'
import { FieldWrapper } from '../../../../UI/Field/style'

const InputField = props => {
  console.log(props)
  return (
    <FieldWrapper>
      <FildElement>
        {/* <LabelDiv>
          <FieldWrapper label={props.intl.formatMessage({ id: 'createAccount' })} />
        </LabelDiv> */}
        <LabelDiv>Электронный адрес</LabelDiv>
        <InputDiv type="email" placeholder="example@gmail.com" />
        <InputErrorDiv>Неверный адрес!</InputErrorDiv>
      </FildElement>
      <FildElement>
        <LabelDiv>Пароль</LabelDiv>
        <InputDiv type="password" />
        <InputErrorDiv>Неверный пароль!</InputErrorDiv>
      </FildElement>
      <FildElement>
        <LabelDiv>Подтвердите пароль</LabelDiv>
        <InputDiv type="password" />
        <InputErrorDiv>Пароли не совпадают!</InputErrorDiv>
      </FildElement>
    </FieldWrapper>
  )
}

export default injectIntl(InputField)
