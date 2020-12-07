import React from 'react'

import QuestionBeforeLink from '../../MyComponents/QuestionBeforeLink/QuestionBeforeLink'
import RedirectLink from '../../MyComponents/RedirectLink/RedirectLink'
import styled from '../OnboardingPage.module.css'

const QuestionFooter = () => {
  return (
    <div className={styled.footerForm}>
      <QuestionBeforeLink text="Already have an account?" />
      <RedirectLink text="Log in" url="/login" />
    </div>
  )
}

export default QuestionFooter
