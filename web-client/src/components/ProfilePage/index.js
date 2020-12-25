import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Container, BottomBar } from '../UI'
import PageTitle from './PageTitle/index'
import UserPhoto from './UserPhoto'
import UserName from './UserName/index'
import { List } from 'antd-mobile'
import styles from './index.module.css'

import {
  CalculatorOutlined,
  StarOutlined,
  MailOutlined,
  ReadOutlined,
  LogoutOutlined
} from '@ant-design/icons'


const ProfilePage = ({ history }) => {
  // Get auth data from firebase
  const auth = useSelector(state => state.firebase.auth)

  if (!auth.uid) {
    throw new Error("User Not Authed")
  }

  // Set query and listeners to Firestore collection
  useFirestoreConnect([
    {
      collection: 'UserProfiles',
      doc: auth.uid,
    }
  ])

  // Get user profile from store
  const userProfileByUid = useSelector(state => state.firestore.data.UserProfiles)

  if (!userProfileByUid) {
    return 'Loading profile...'
  }

  const userProfile = userProfileByUid[auth.uid]

  if (!userProfile) {
    throw new Error("No valid user profile entry in colleciton")
  }

  console.log(userProfile)

  const { photoURL, displayName } = userProfile

  return (
    <Container>
      <PageTitle>Profile</PageTitle>
      <UserPhoto photoURL={photoURL}/>
      <UserName>{displayName}</UserName>
      <List className={styles.profileMenu}>
        <List.Item
          arrow="horizontal"
          thumb={<CalculatorOutlined className={styles.icon}/>}
          platform="android"
          onClick={() => {}}
        >
          Calculate your daily calories
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={<StarOutlined className={styles.icon}/>}
          onClick={() => {}}
        >
          Favorites
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={<MailOutlined className={styles.icon}/>}
          onClick={() => {}}
        >
          Contact us
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={<ReadOutlined className={styles.icon}/>}
          onClick={() => {}}
        >
          Terms of use
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={<LogoutOutlined className={styles.icon}/>}
          onClick={() => {}}
        >
          Sign Out
        </List.Item>
      </List>
      <BottomBar history={history} />
    </Container>
  )
}

export default ProfilePage