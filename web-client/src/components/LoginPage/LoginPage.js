import React, { useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Backdrop, Field, Button } from '../UI'
import { checkValidity, disableButton } from '../../utils'
import { logo } from '../../assets'
import {
  LoginWrapper,
  FormWrapper,
  Logo,
  LoginName,
  Form,
  FieldsWrapper,
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

  const createErrorMessage = () => {
    const controlItems = { ...controls }

    if (controlItems.email.value === '') {
      controlItems.email.errorMessage = 'errorMessageEmailRequired'
    } else if (controlItems.email.value !== '') {
      controlItems.email.errorMessage = 'errorMessageEmail'
    }

    setControls(controlItems)

    if (controlItems.password.value === '') {
      controlItems.password.errorMessage = 'errorMessagePasswordRequired'
    } else if (controlItems.password.value.length < 6) {
      controlItems.password.errorMessage = 'errorMessagePasswordSmall'
    } else if (controlItems.password.value.length > 60) {
      controlItems.password.errorMessage = 'errorMessagePasswordLong'
    }

    setControls(controlItems)
  }

  const changeHandler = event => {
    const controlItems = { ...controls }
    const { name } = event.target

    controlItems[name].value = event.target.value
    controlItems[name].isValid = checkValidity(
      event.target.value,
      controlItems[name].validation
    )
    createErrorMessage()
    setDisabledButton(disableButton(controlItems))
    setControls(controlItems)
  }

  const blurHandler = event => {
    const controlItems = { ...controls }
    const { name } = event.target
    controlItems[name].isTouched = true
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
        <Form>
          <FieldsWrapper>
            <Field
              type="text"
              label={props.intl.formatMessage({ id: 'emailLabel' })}
              labelColor="#fff"
              value={controls.email.value}
              name="email"
              placeholder="example@gmail.com"
              isValid={controls.email.isValid}
              isTouched={controls.email.isTouched}
              errorMessage={props.intl.formatMessage({ id: `${emailErrorMessage}` })}
              onChange={changeHandler}
              onBlur={blurHandler}
            />
            <Field
              type="password"
              label={props.intl.formatMessage({ id: 'passwordLabel' })}
              labelColor="#fff"
              value={controls.password.value}
              name="password"
              placeholder="password"
              isValid={controls.password.isValid}
              isTouched={controls.password.isTouched}
              errorMessage={props.intl.formatMessage({
                id: `${passwordErrorMessage}`,
              })}
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </FieldsWrapper>

          <Button
            type="submit"
            btnType="primary"
            disabled={isDisabledButton}
            // onClick={clickHandler}>
          >
            <FormattedMessage id="signIn" />
          </Button>
        </Form>
      </FormWrapper>
    </LoginWrapper>
  )
}

export default injectIntl(LoginPage)
