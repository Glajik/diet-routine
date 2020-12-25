import React from 'react'
import { Container, BottomBar } from '../UI'
import PageTitle from './PageTitle/index'
import styles from './index.module.css'

const ProfilePage = ({ history }) => {

  return (
    <Container>
      <PageTitle>Profile</PageTitle>
      Hello world
      <BottomBar history={history} />
    </Container>
  )
}

export default ProfilePage
