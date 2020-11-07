import React, { useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Backdrop, Field, Button } from '../UI'
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
      },
    },
  })

  const changeHandler = event => {
    const controlItems = { ...controls }
    const { name } = event.target

    controlItems[name].value = event.target.value
    controlItems[name].isTouched = true
    // console.log(event.target.name, ':', event.target.value)
    setControls(controlItems)
    console.log('1:', controls)
    // controlItems[name].valid = checkValidity(event.target.value, controls[name].validation)
  }

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
              errorMessage={controls.email.errorMessage}
              onChange={changeHandler}
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
              errorMessage={controls.password.errorMessage}
              onChange={changeHandler}
            />
          </FieldsWrapper>

          <Button
            type="submit"
            btnType="primary"
            // disabled={state.isDisabled}
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
