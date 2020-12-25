import React from 'react'
import styles from './UploadPhoto.module.css'
import { PlusCircleOutlined } from '@ant-design/icons'

const UploadPhoto = () => (
  <div className={styles.container}>
    <PlusCircleOutlined className={styles.icon}/>
  </div>
)

export default UploadPhoto
