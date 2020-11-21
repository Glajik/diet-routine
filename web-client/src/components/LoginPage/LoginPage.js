import React, { useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import * as firebase from 'firebase/app'
import { Backdrop, Field, Button, Loader } from '../UI'
import { checkValidity, disableButton, createErrorMessage } from '../../utils'
import { logo } from '../../assets'
import {
  LoginWrapper,
  FormWrapper,
  Logo,
  LoginName,
  Form,
  FieldsWrapper,
  LoaderWrapper,
} from './style'

const LoginPage = props => {
  const [controls, setControls] = useState({
    email: {
      id: 1,
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
      id: 2,
      value: '',
      isTouched: false,
      isValid: false,
      errorMessage: 'error',
      validation: {
        required: true,
        minLength: 6,
        maxLength: 60,
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
    createErrorMessage(controlItems, setControls)
    setDisabledButton(disableButton(controlItems))
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
      .signInWithEmailAndPassword(controls.email.value, controls.password.value)
      .then(() => setLoading(false))
      .then(() => console.log('LogIn: ', formData))
      .catch(e => {
        console.log('Error: ', e)
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

  return (
    <LoginWrapper>
      <Backdrop show />
      <FormWrapper>
        <Logo src={logo} />
        <LoginName>
          <FormattedMessage id="signInName" />
        </LoginName>
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
    </LoginWrapper>
  )
}

export default injectIntl(LoginPage)
