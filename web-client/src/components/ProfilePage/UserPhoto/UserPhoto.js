import React from 'react'
import styles from './UserPhoto.module.css'
import UploadPhoto from './UploadPhoto'

const UserPhoto = ({ photoURL }) => (
  <div className={styles.container}>
    {
      !photoURL
        ? <UploadPhoto />
        : <img src={photoURL} className={styles.image}/>
    }
  </div>
)

export default UserPhoto
