import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {Link} from 'react-router-dom'
import withModal from '../../hoc/withModal'
import {initSignInForm, initSignUpForm} from '../../redux/actions/formAction'
import Form from '../Form'
import Loader from '../UI/Loader'
import {FormWrapper, Header, Navlink} from './style'

const SignInOrSignUpForm = (props) => {
  useEffect(() => {
    if (props.signIn) {
      props.initSignInForm()
    } else if (props.signUp) {
      props.initSignUpForm()
    }
  })

  const form =  (
    <FormWrapper>
      <Header>
        {
          props.signIn
            ? <FormattedMessage id="logIn"/>
            : props.signUp
            ? <FormattedMessage id="createAccount"/>
            : ''
        }
      </Header>
      <Link
        style={{textDecoration: 'none'}}
        to={props.signIn ? '/sign-up' : props.signUp ? '/' : ''}>
        <Navlink>
          {
            props.signIn
              ? <FormattedMessage id="signUp"/>
              : props.signUp
              ? <FormattedMessage id="signIn"/>
              : ''
          }
        </Navlink>
      </Link>
      <Form signIn={props.signIn} signUp={props.signUp}/>
    </FormWrapper>
  )

  return props.isLoading
    ? <Loader style={{position: 'absolute', left: '45%', top: '40%'}} />
    : form
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isLoading: state.loader.isLoading,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initSignInForm: () => dispatch(initSignInForm()),
    initSignUpForm: () => dispatch(initSignUpForm()),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withModal(SignInOrSignUpForm))
