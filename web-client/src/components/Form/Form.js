import React from 'react'
import {injectIntl} from 'react-intl'
import {connect} from 'react-redux'
import {disableButton} from '../../utility'
import Button from '../UI/Button'
import Field from '../UI/Field'
import {
  submitForm,
  fieldChanged,
  initSignUpForm,
  initSignInForm
} from '../../redux/actions/formAction'

const signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBIRNMdmhRvjersBGsJDfNLD5uICKQYSpU'
const signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIRNMdmhRvjersBGsJDfNLD5uICKQYSpU'

const Form = (props) => {
  const changeHandler = (event) => {
    event.persist()
    props.fieldChanged(event.target)
  }

  const submitHandler = (event) => {
    if (props.signUp) {
      props.submit(event, {...props.controls}, signUpUrl, props.successMessage, props.errorMessage)
    } else if (props.signIn) {
      props.submit(event, {...props.controls}, signInUrl, props.successMessage, props.errorMessage)
    }
  }


  const form = []
  const controls = {...props.controls}

  for (let key in controls) {
    form.push(controls[key])
  }

  const submitAction = props.signIn
    ? 'signIn'
    : props.signUp
      ? 'signUp'
      : ''

  return (
    <form>
      {
        form.map(field => {
          return (
            <Field
              key={field.id}
              name={field.name}
              value={field.value}
              fieldType={field.folderType}
              type={field.type}
              label={props.intl.formatMessage({id: field.label})}
              placeholder={props.intl.formatMessage({id: field.placeholder})}
              errorMessage={field.errorMessage}
              changed={changeHandler}/>
          )
        })
      }

      <Button
        action={submitAction}
        type="submit"
        isLoading={props.isLoading}
        disabled={disableButton(props.isDisabled, form)}
        clicked={submitHandler}/>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    controls: state.form.controls,
    isLoading: state.loader.isLoading,
    isDisabled: state.form.isDisabled,
    successMessage: state.form.successMessage,
    errorMessage: state.form.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fieldChanged: (eventTarget) => dispatch(fieldChanged(eventTarget)),
    initSignUpForm: () => dispatch(initSignUpForm()),
    initSignInForm: () => dispatch(initSignInForm()),
    submit: (event, controls, url, successMessage, errorMessage) => dispatch(submitForm(event, controls, url, successMessage, errorMessage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Form))
