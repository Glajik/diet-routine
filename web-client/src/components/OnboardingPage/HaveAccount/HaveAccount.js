import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '../OnboardingPage.module.css'

const HaveAccount = () => {
  return (
    <div className={styled.question}>
      <p className={styled.haveAccount}>Already have an account?</p>
      <NavLink to="/signin" className={styled.signIn}>
        Log in
      </NavLink>
    </div>
  )
}

export default HaveAccount
