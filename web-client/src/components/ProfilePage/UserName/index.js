import React from 'react'
import styles from './index.module.css'
import { EditOutlined } from '@ant-design/icons'
import IconButton from './IconButton'

const UserName = ({ children, onChange }) => (
  <div className={styles.container}>
    <p className={styles.body}>
      <span>{children}</span>
      <IconButton onClick={() => onChange('John Travolta')}>
        <EditOutlined className={styles.icon}/>
      </IconButton>
    </p>
  </div>
)

export default UserName
