import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from '../Login.module.css'

const QuestionFooter = () => {
  return (
    <div className={styled.question}>
      <div className={styled.firstPart}>
        <p className={styled.notAMemeber}>Not a member?</p>
        <NavLink to="/signup" className={styled.link}>
          Sign up
        </NavLink>
      </div>
      <NavLink to="/forgotpassword" className={styled.link}>
        Forgot password
      </NavLink>
    </div>
  )
}

export default QuestionFooter
