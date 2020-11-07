import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import {
  InputDiv,
  LabelDiv,
  InputErrorDiv,
  FildElement,
  InputRememberPass,
} from './style'
import { FieldWrapper } from '../../../../UI/Field/style'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonDiv } from '../ButtonEnter/style'
import { FormattedMessage } from 'react-intl'
import { signIn } from '../../../../../redux/actions/authActions'
import { Redirect } from 'react-router-dom'
import Field from '../../../../UI/Field'
import Loader from '../../../../UI/Loader/'

const InputField = ({ intl }) => {
  const { formatMessage } = intl
  // const forgotPasswordIntl = formatMessage({ id: 'forgotPassword' })
  const inputEmailLabelIntl = formatMessage({ id: 'emailLabel' })
  const inputPasswordLabelIntl = formatMessage({ id: 'passwordLabel' })

  const isLoaded = useSelector(state => state.firebase.auth.isLoaded)
  const uid = useSelector(state => state.firebase.auth.uid)
  const dispatch = useDispatch()

  const [formValue, setFormValue] = useState({ email: '', password: '' })
  const [formErrors, setFormErrors] = useState({ email: false, password: false })
  const [isInputTouched, setIsInputTouched] = useState({
    email: false,
    password: false,
  })

  const handleUserInput = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
    validateField(e.target.name, e.target.value)
  }

  const validateField = (fieldName, value) => {
    setIsInputTouched({ ...isInputTouched, [fieldName]: true })
    switch (fieldName) {
      case 'email':
        setFormErrors({
          ...formErrors,
          [fieldName]: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? false
            : true,
        })
        break
      case 'password':
        setFormErrors({
          ...formErrors,
          [fieldName]: value.length >= 8 ? false : true,
        })
        break
      default:
        break
    }
  }

  if (!isLoaded) return <Loader />

  if (uid) {
    return <Redirect to="/in" />
  }

  return (
    <>
      <FieldWrapper>
        <Field
          label={inputEmailLabelIntl}
          isValid={!formErrors.email}
          isTouched={isInputTouched.email}
          type="email"
          placeholder="example@gmail.com"
          name="email"
          value={formValue.email}
          onChange={handleUserInput}
          errorMessage={formatMessage({ id: 'errorMessageEmail' })}
        />

        <Field
          label={inputPasswordLabelIntl}
          isValid={!formErrors.password}
          isTouched={isInputTouched.password}
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleUserInput}
          errorMessage={formatMessage({ id: 'errorMessagePassword' })}
        />

        {formErrors.email || formErrors.password ? (
          <InputRememberPass>
            {formatMessage({ id: 'forgotPassword' })}
          </InputRememberPass>
        ) : null}
      </FieldWrapper>

      <ButtonDiv
        btnType="primary"
        onClick={() => dispatch(signIn(formValue.email, formValue.password))}>
        <FormattedMessage id="signIn" />
      </ButtonDiv>
    </>
  )
}

export default injectIntl(InputField)
