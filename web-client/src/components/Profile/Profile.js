import React from 'react'
import {Container} from '../UI'
import {TopBottomBarsLayout} from '../../layouts'
import {ProfileContentWrapper} from './style'

const Profile = (props) => {
  return (
    <Container>
      <TopBottomBarsLayout
        title="profile"
        settingsAction={() => console.log('Profile')}
        history={props.history}>
        <ProfileContentWrapper>
          <h2>Profile</h2>
        </ProfileContentWrapper>
      </TopBottomBarsLayout>
    </Container>
  )
}

export default Profile