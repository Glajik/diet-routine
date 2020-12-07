import React from 'react'
import QuestionBeforeLink from '../../MyComponents/QuestionBeforeLink/QuestionBeforeLink'

import RedirectLink from '../../MyComponents/RedirectLink/RedirectLink'
import styled from '../Login.module.css'

const QuestionFooter = () => {
  return (
    <div className={styled.footerForm}>
      <QuestionBeforeLink text="Not a member?" />
      <RedirectLink text="Sign up" url="/signup" />
      <RedirectLink text="Forgot password" url="/newpassword" />
    </div>
  )
}

export default QuestionFooter
