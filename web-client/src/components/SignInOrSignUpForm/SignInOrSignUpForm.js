import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import withModal from '../../hoc/withModal'
import {initSignInForm, initSignUpForm} from '../../redux/actions/formAction'
import Form from '../Form'
import {FormWrapper, Header, Navlink} from './style'

const SignInOrSignUpForm = (props) => {
  useEffect(() => {
    if (props.signIn) {
      props.initSignInForm()
    } else if (props.signUp) {
      props.initSignUpForm()
    }
  })

  return (
    <FormWrapper>
      <Header>
        {
          props.signIn
            ? 'Log in'
            : props.signUp
            ? 'Create an account'
            : ''
        }
      </Header>
      <Link
        style={{textDecoration: 'none'}}
        to={props.signIn ? '/sign-up' : props.signUp ? '/' : ''}>
        <Navlink>
          {
            props.signIn
              ? 'Sign Up'
              : props.signUp
              ? 'Sign In'
              : ''
          }
        </Navlink>
      </Link>
      <Form signIn={props.signIn} signUp={props.signUp}/>
    </FormWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    initSignInForm: () => dispatch(initSignInForm()),
    initSignUpForm: () => dispatch(initSignUpForm())
  }
}

export default connect(null, mapDispatchToProps)(withModal(SignInOrSignUpForm))