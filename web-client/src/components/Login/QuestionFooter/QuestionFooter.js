import React from 'react'
import { handleForgotPass, handleSignup } from '../../../redux/actions/drawerActions'

import RedirectLink from '../../MyComponents/RedirectLink/RedirectLink'
import styled from '../Login.module.css'

const QuestionFooter = () => {
  return (
    <div className={styled.footerForm}>
      <RedirectLink text="Forgot password" callback={handleForgotPass} />
    </div>
  )
}

export default QuestionFooter
