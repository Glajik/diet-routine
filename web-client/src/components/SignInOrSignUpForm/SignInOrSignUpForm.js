import React from 'react'
import {Link} from 'react-router-dom'
import Form from '../Form'
import {FormWrapper, Header, Navlink} from './style'

const SignInOrSignUpForm = (props) => (
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


export default SignInOrSignUpForm