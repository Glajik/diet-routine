import React from 'react'
import { Wrapper } from './style'
import HeaderWrapper from './HeaderWrapper/HeaderWrapper'
import FormWrapper from './FormWrapper/FormWrapper'
import { useSelector } from 'react-redux'
import Loader from '../UI/Loader/index'
import Backdrop from '../UI/Backdrop'
import { RegisterWrapper } from './style'

const RegistrationPage = props => {
  // const isLoaded = useSelector(state => state.firebase.signOut.isLoaded)
  // if (!isLoaded) return <Loader />
  return (
    <Wrapper>
      <Backdrop show={true} />
      <RegisterWrapper>
        <HeaderWrapper />
        <FormWrapper />
      </RegisterWrapper>
    </Wrapper>
  )
}

export default RegistrationPage
