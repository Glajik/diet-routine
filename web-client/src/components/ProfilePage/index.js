import React from 'react'
import { Container, BottomBar } from '../UI'
import PageTitle from './PageTitle/index'
import UserPhoto from './UserPhoto/index'
import styles from './index.module.css'

const ProfilePage = ({ history }) => {
  const photoUrl = "https://randomuser.me/api/portraits/men/44.jpg"

  return (
    <Container>
      <PageTitle>Profile</PageTitle>
      <UserPhoto photoUrl={photoUrl}/>
      <BottomBar history={history} />
    </Container>
  )
}

export default ProfilePage
