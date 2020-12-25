import React from 'react'
import styles from './index.module.css'

const UserPhoto = ({ photoUrl }) => (
  <div className={styles.container}>
    <img src={photoUrl} className={styles.image}/>
  </div>
)

export default UserPhoto
