import React from 'react'
import { handleSignup } from '../../../redux/actions/drawerActions'

import QuestionBeforeLink from '../../MyComponents/QuestionBeforeLink/QuestionBeforeLink'
import RedirectLink from '../../MyComponents/RedirectLink/RedirectLink'
import styled from './QuestionFooter.module.css'

const QuestionFooter = () => {
  return (
    <div className={styled.footerForm}>
      <QuestionBeforeLink text="Not a member?" />
      <RedirectLink text="Sign up" callback={handleSignup} />
    </div>
  )
}

export default QuestionFooter
