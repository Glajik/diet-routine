import React, { useState, useSelector } from 'react'
import { injectIntl } from 'react-intl'
import { InputDiv, LabelDiv, InputErrorDiv, FildElement } from './style'
import { FieldWrapper } from '../../../../UI/Field/style'
import { FormattedMessage } from 'react-intl'
import { ButtonDiv } from '../ButtonEnter/style'
import { useDispatch } from 'react-redux'
import { signUp } from '../../../../../redux/actions/authActions'
import { Redirect } from 'react-router-dom'
import Field from '../../../../UI/Field'
import Loader from '../../../../UI/Loader/'

const InputField = ({ intl }) => {
  const { formatMessage } = intl
  const inputEmailLabelIntl = formatMessage({ id: 'emailLabel' })
  const inputPasswordLabelIntl = formatMessage({ id: 'passwordLabel' })
  const inputPasswordLabelConfirmIntl = formatMessage({ id: 'passwordLabelConfirm' })

  // const isLoaded = useSelector(state => state.firebase.signOut.isLoaded)
  // const uid = useSelector(state => state.firebase.signOut.uid)
  const dispatch = useDispatch()

  // const intialValues = { email: "", password: "", confirmPassword: ''};
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  })

  const [isInputTouched, setIsInputTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  })

  const handleUserInput = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
    validateField(e.target.name, e.target.value)
  }

  // const validateField = (fieldName, value) => {
  //   setIsInputTouched({ ...isInputTouched, [fieldName]: true })
  //   if (value.email) {
  //     setFormErrors({
  //       ...formErrors,
  //       [fieldName]: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
  //         ? false
  //         : true,
  //     })
  //   }
  //   if ((fieldName = 'password')) {
  //     setFormErrors({
  //       ...formErrors,
  //       [fieldName]: value.length >= 8 ? false : true,
  //     })
  //   }
  //   if ((fieldName = 'confirmPassword')) {
  //     setFormErrors({
  //       ...formErrors,
  //       [fieldName]: formValue.password === value ? false : true,
  //     })
  //   }
  // }

  // ******CASE**********
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
      case 'confirmPassword':
        setFormErrors({
          ...formErrors,
          [fieldName]: formValue.password === value ? false : true,
        })
        break
      default:
        break
    }
  }
  // ******CASE**********

  // if (!isLoaded) return <Loader />

  // if (uid) {
  //   return <Redirect to="/in" />
  // }

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

        <Field
          label={inputPasswordLabelConfirmIntl}
          isValid={!formErrors.confirmPassword}
          isTouched={isInputTouched.confirmPassword}
          type="password"
          name="confirmPassword"
          value={formValue.confirmPassword}
          onChange={handleUserInput}
          errorMessage={formatMessage({ id: 'errorMessagePasswordConfirm' })}
        />

        {/* <FildElement>
          <LabelDiv htmlFor="email">{inputEmailLabelIntl}</LabelDiv>
          <InputDiv
            isValid={formErrors.email}
            isTouched={isInputTouched.email}
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={formValue.email}
            onChange={handleUserInput}
          />
          {formErrors.email ? (
            <InputErrorDiv>{formErrors.email}</InputErrorDiv>
          ) : null}
        </FildElement>
        <FildElement>
          <LabelDiv htmlFor="password">{inputPasswordLabelIntl}</LabelDiv>
          <InputDiv
            isValid={formErrors.password}
            isTouched={isInputTouched.password}
            type="password"
            name="password"
            value={formValue.password}
            onChange={handleUserInput}
          />
          {formErrors.password ? (
            <InputErrorDiv>{formErrors.password}</InputErrorDiv>
          ) : null}
        </FildElement>
        <FildElement>
          <LabelDiv htmlFor="confirmPassword">
            {inputPasswordLabelConfirmIntl}
          </LabelDiv>
          <InputDiv
            isValid={formErrors.confirmPassword}
            isTouched={isInputTouched.confirmPassword}
            type="password"
            name="confirmPassword"
            value={formValue.confirmPassword}
            onChange={handleUserInput}
          />
          {formErrors.confirmPassword ? (
            <InputErrorDiv>{formErrors.confirmPassword}</InputErrorDiv>
          ) : null}
        </FildElement> */}
      </FieldWrapper>
      <ButtonDiv
        btnType="primary"
        onClick={() => dispatch(signUp(formValue.email, formValue.password))}>
        <FormattedMessage id="signIn" />
      </ButtonDiv>
    </>
  )
}

export default injectIntl(InputField)
