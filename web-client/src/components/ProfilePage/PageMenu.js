import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { List } from 'antd-mobile'
import styles from './PageMenu.module.css'

import {
  CalculatorOutlined,
  StarOutlined,
  MailOutlined,
  ReadOutlined,
  LogoutOutlined,
} from '@ant-design/icons'

const PageMenu = () => {
  const firebase = useFirebase()
  
  return (
    <List className={styles.pageMenu}>
      <List.Item
        arrow="horizontal"
        thumb={<CalculatorOutlined className={styles.icon} />}
        platform="android"
        onClick={() => {}}>
        Calculate your daily calories
      </List.Item>
      <List.Item
        arrow="horizontal"
        thumb={<StarOutlined className={styles.icon} />}
        onClick={() => {}}>
        Favorites
      </List.Item>
      <List.Item
        arrow="horizontal"
        thumb={<MailOutlined className={styles.icon} />}
        onClick={() => {}}>
        Contact us
      </List.Item>
      <List.Item
        arrow="horizontal"
        thumb={<ReadOutlined className={styles.icon} />}
        onClick={() => {}}>
        Terms of use
      </List.Item>
      <List.Item
        arrow="horizontal"
        thumb={<LogoutOutlined className={styles.icon} />}
        onClick={() => firebase.logout()}>
        Sign Out
      </List.Item>
    </List>
  )
}

export default PageMenu
