import React from 'react'
import { handleLogin } from '../../../redux/actions/drawerActions'

import QuestionBeforeLink from '../../MyComponents/QuestionBeforeLink/QuestionBeforeLink'
import RedirectLink from '../../MyComponents/RedirectLink/RedirectLink'
import styled from '../OnboardingPage.module.css'

const QuestionFooter = () => {
  return (
    <div className={styled.footerForm}>
      <QuestionBeforeLink text="Already have an account?" />
      <RedirectLink text="Log in" callback={handleLogin} />
    </div>
  )
}

export default QuestionFooter
