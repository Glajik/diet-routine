import React from 'react'
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
  const photoUrl = "https://randomuser.me/api/portraits/men/44.jpg"

  return (
    <Container>
      <PageTitle>Profile</PageTitle>
      <UserPhoto photoUrl={null}/>
      <UserName>John Doe</UserName>
      <List className={styles.container}>
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
