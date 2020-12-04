import React from 'react'
import { NavLink } from 'react-router-dom'
import { Typography, Button } from 'antd'
import styled from './WelcomePage.module.css'
import image from '../../assets/images/girlFirstPage.svg'

const { Title } = Typography

const WelcomePage = () => {
  return (
    <div className={styleMedia.container}>
      <div className={styled.imageContainer}>
        <img alt="" src={image} className={styled.image} />
      </div>
      <Title className={styled.phrase}>
        Sign up or <br /> try out right now
      </Title>
      <div className={styled.btnGroup}>
        <Button className={styled.greenBtn}>Try out now</Button>
        <Button className={styled.whiteBtn}>Sign up</Button>
      </div>
      <div>
        <p className={styled.haveAccount}>Already have an account?</p>
        <NavLink to="/signin" className={styled.signIn}>
          Sign in
        </NavLink>
      </div>
    </div>
  )
}

export default WelcomePage
