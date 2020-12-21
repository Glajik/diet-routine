import React from 'react'
import {Container} from '../UI'
import {TopBottomBarsLayout} from '../../layouts'
import {ProfileContentWrapper} from './style'
import { Button } from '../UI/Button/style'
import { useDispatch } from 'react-redux'
import { signOut } from '../../redux/actions/authActions'

const Profile = (props) => {
  const dispatch = useDispatch()

  return (
    <Container>
      <TopBottomBarsLayout
        title="profile"
        settingsAction={() => console.log('Profile')}
        history={props.history}>
        <ProfileContentWrapper>
          <h2>Profile</h2>
          <Button btnType='secondary' onClick={() => dispatch(signOut())} >Log Out</Button>
        </ProfileContentWrapper>
      </TopBottomBarsLayout>
    </Container>
  )
}

export default Profile