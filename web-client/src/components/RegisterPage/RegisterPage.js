import React, { useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import * as firebase from 'firebase/app'
import { Backdrop, Field, Button, Loader } from '../UI'
import { checkValidity, disableButton, createErrorMessage } from '../../utils'
import { logo, registerPencil } from '../../assets'
import {
  RegisterWrapper,
  FormWrapper,
  Logo,
  RegisterName,
  Form,
  FieldsWrapper,
  LoaderWrapper,
  UserNameWrapper,
  Icon,
  UserName,
  PencilButton,
} from './style'

const RegisterPage = props => {
  const [controls, setControls] = useState({
    email: {
      value: '',
      isTouched: false,
      isValid: false,
      errorMessage: 'error',
      validation: {
        required: true,
        isEmail: true,
      },
    },
    password: {
      value: '',
      isTouched: false,
      isValid: false,
      errorMessage: 'error',
      validation: {
        required: true,
        minLength: 6,
        maxLength: 60,
        isPassword: true,
      },
    },
    repeatPassword: {
      value: '',
      isTouched: false,
      isValid: false,
      errorMessage: 'error',
      validation: {
        required: true,
        isRepeatPassword: true,
      },
    },
  })

  const [isDisabledButton, setDisabledButton] = useState(true)
  const [isLoading, setLoading] = useState(false)

  const changeHandler = event => {
    const controlItems = { ...controls }
    const { name } = event.target

    controlItems[name].value = event.target.value
    controlItems[name].isValid = checkValidity(
      event.target.value,
      controlItems[name].validation
    )
    repeatPasswordValidity()
    createErrorMessage(controlItems, setControls)
    setDisabledButton(disableButton(controlItems))
    setControls(controlItems)
  }

  const repeatPasswordValidity = () => {
    const controlItems = { ...controls }

    if (controlItems.password.value === controlItems.repeatPassword.value) {
      controlItems.repeatPassword.isValid = true
    } else {
      controlItems.repeatPassword.isValid = false
    }

    setControls(controlItems)
  }

  const blurHandler = event => {
    const controlItems = { ...controls }
    const { name } = event.target

    if (controlItems[name].value.trim() !== '') {
      controlItems[name].isTouched = true
    }

    setControls(controlItems)
  }

  const submitHandler = event => {
    event.preventDefault()

    const controlItems = { ...controls }
    const formData = {}

    for (let control in controls) {
      formData[control] = controls[control].value
    }

    setDisabledButton(true)
    setLoading(true)

    firebase
      .auth()
      .createUserWithEmailAndPassword(controls.email.value, controls.password.value)
      .then(() => console.log('Register: ', formData))
      .then(() => setLoading(false))
      .then(() => props.history.push('/login'))
      .catch(e => {
        console.log(e)
        setLoading(false)
      })

    for (let control in controlItems) {
      controlItems[control].value = ''
      controlItems[control].isValid = false
      controlItems[control].isTouched = false
    }

    setControls(controlItems)
  }

  let emailErrorMessage = controls.email.errorMessage
  let passwordErrorMessage = controls.password.errorMessage
  let repeatPasswordErrorMessage = controls.repeatPassword.errorMessage

  return (
    <RegisterWrapper>
      <Backdrop show />
      <FormWrapper>
        <Logo src={logo} />
        <RegisterName>
          <FormattedMessage id="signUpName" />
        </RegisterName>
        <UserNameWrapper>
          <PencilButton>
            <Icon src={registerPencil} />
          </PencilButton>
          <UserName>Антонина</UserName>
        </UserNameWrapper>
        {!isLoading ? (
          <Form>
            <FieldsWrapper>
              <Field
                type="text"
                label="emailLabel"
                labelColor="#fff"
                value={controls.email.value}
                name="email"
                placeholder="emailPlaceholder"
                isValid={controls.email.isValid}
                isTouched={controls.email.isTouched}
                errorMessage={emailErrorMessage}
                onChange={changeHandler}
                onBlur={blurHandler}
              />
              <Field
                type="password"
                label="passwordLabel"
                labelColor="#fff"
                value={controls.password.value}
                name="password"
                placeholder="passwordPlaceholder"
                isValid={controls.password.isValid}
                isTouched={controls.password.isTouched}
                errorMessage={passwordErrorMessage}
                onChange={changeHandler}
                onBlur={blurHandler}
              />
              <Field
                type="password"
                label="passwordLabelConfirm"
                labelColor="#fff"
                value={controls.repeatPassword.value}
                name="repeatPassword"
                placeholder="repeatPasswordPlaceholder"
                isValid={controls.repeatPassword.isValid}
                isTouched={controls.repeatPassword.isTouched}
                errorMessage={repeatPasswordErrorMessage}
                onChange={changeHandler}
                onBlur={blurHandler}
              />
            </FieldsWrapper>

            <Button
              type="submit"
              btnType="primary"
              position="authLayout"
              disabled={isDisabledButton}
              onClick={submitHandler}>
              <FormattedMessage id="signIn" />
            </Button>
          </Form>
        ) : (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
      </FormWrapper>
    </RegisterWrapper>
  )
}

export default injectIntl(RegisterPage)
