import React from 'react'
import { handleForgotPass, handleSignup } from '../../../redux/actions/drawerActions'

import QuestionBeforeLink from '../../MyComponents/QuestionBeforeLink/QuestionBeforeLink'
import RedirectLink from '../../MyComponents/RedirectLink/RedirectLink'
import styled from '../Login.module.css'

const QuestionFooter = () => {
  return (
    <div className={styled.footerForm}>
      <QuestionBeforeLink text="Not a member?" />
      <RedirectLink text="Sign up" callback={handleSignup} />
      <RedirectLink text="Forgot password" callback={handleForgotPass} />
    </div>
  )
}

export default QuestionFooter
