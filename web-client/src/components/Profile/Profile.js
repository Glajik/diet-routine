import React from 'react'
import {BottomBar, Container, TopBar} from '../UI'
import {ProfileContentWrapper} from './style'

const Profile = (props) => {
  return (
    <Container>
      <TopBar
        pageName="profile"
        pageHasSettings={true}
        history={props.history}/>
      <ProfileContentWrapper>
        <h2>Profile</h2>
      </ProfileContentWrapper>
      <BottomBar
        currentPage="profile"
        history={props.history}/>
    </Container>
  )
}

export default Profile