import React from 'react'
import styles from './index.module.css'
import { EditOutlined } from '@ant-design/icons'

const UserName = ({ children }) => (
  <div className={styles.container}>
    <p className={styles.body}>
      <span>{children}</span>
      <span className={styles.spacer} />
      <EditOutlined className={styles.icon}/>
    </p>
  </div>
)

export default UserName
