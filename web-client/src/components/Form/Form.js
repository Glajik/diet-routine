import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {disableButton} from '../../utility'
import Button from '../UI/Button'
import Folder from '../UI/Folder'
import Loader from '../UI/Loader'
import {
  submitForm,
  folderChanged,
  initSignUpForm,
  initSignInForm
} from '../../redux/actions/authAction'

const signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBIRNMdmhRvjersBGsJDfNLD5uICKQYSpU'
const signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIRNMdmhRvjersBGsJDfNLD5uICKQYSpU'

const Form = (props) => {
  useEffect(() => {
    if (props.signUp) {
      props.initSignUpForm()
    } else if (props.signIn) {
      props.initSignInForm()
    }
  })

  const changeHandler = (event) => {
    props.folderChanged(event)
  }

  const submitHandler = (event) => {
    if (props.signUp) {
      props.submit(event, {...props.controls}, signUpUrl)
    } else if (props.signIn) {
      props.submit(event, {...props.controls}, signInUrl)
    }
  }


  const form = []
  const controls = {...props.controls}

  for (let key in controls) {
    form.push(controls[key])
  }

  const submitAction = props.signIn
    ? 'Sign In'
    : props.signUp
      ? 'Sign Up'
      : ''

  return (
    <form>
      {
        form.map(folder => {
          return (
            <Folder
              key={folder.id}
              name={folder.name}
              value={folder.value}
              folderType={folder.folderType}
              type={folder.type}
              label={folder.label}
              placeholder={folder.placeholder}
              errorMessage={folder.errorMessage}
              changed={changeHandler}/>
          )
        })
      }

      <Button
        action={props.isLoading ? <Loader /> : submitAction}
        type="submit"
        isLoading={props.isLoading}
        disabled={disableButton(props.isDisabled, form)}
        clicked={submitHandler}/>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    controls: state.auth.controls,
    isLoading: state.loader.isLoading,
    isDisabled: state.auth.isDisabled
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    folderChanged: (event) => dispatch(folderChanged(event)),
    initSignUpForm: () => dispatch(initSignUpForm()),
    initSignInForm: () => dispatch(initSignInForm()),
    submit: (event, controls, url) => dispatch(submitForm(event, controls, url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)