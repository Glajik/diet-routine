import React from 'react'
import styles from './UserPhoto.module.css'
import UploadPhoto from './UploadPhoto'

const UserPhoto = ({ photoUrl }) => (
  <div className={styles.container}>
    {
      !photoUrl
        ? <UploadPhoto />
        : <img src={photoUrl} className={styles.image}/>
    }
  </div>
)

export default UserPhoto
