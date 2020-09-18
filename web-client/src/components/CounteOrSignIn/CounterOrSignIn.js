import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/authActions'
import SignInOrSignUpForm from '../SignInOrSignUpForm'
import Counter from '../Counter'

function CounterOrSignIn({ auth }) {
  if (!auth.uid) {
    return <SignInOrSignUpForm signIn />
  } else {
    return <Counter />
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterOrSignIn)
