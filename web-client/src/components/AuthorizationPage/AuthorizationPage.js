import React from 'react'
import { Wrapper } from './style'
import HeaderWrapper from './HeaderWrapper/HeaderWrapper'
import FormWrapper from './FormWrapper/FormWrapper'
import Form from './FormWrapper/Form/Form'
import Loader from '../UI/Loader/index'
import { useSelector } from 'react-redux'
import Backdrop from '../UI/Backdrop'
import { RegisterWrapper } from './style'

const AuthorizationPage = props => {
  const isLoaded = useSelector(state => state.firebase.auth.isLoaded)
  if (!isLoaded) return <Loader />

  return (
    <Wrapper>
      <Backdrop show={true} />
      <RegisterWrapper>
        <HeaderWrapper />
        <Form />
      </RegisterWrapper>
    </Wrapper>
  )
}

export default AuthorizationPage
