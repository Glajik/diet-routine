import React from 'react'
import styles from './index.module.css'
import UploadPhoto from './UploadPhoto'

const UserPhoto = ({ photoURL, onUpload }) => (
  <div className={styles.container}>
    {
      !photoURL
        ? <UploadPhoto onUpload={onUpload} />
        : <img src={photoURL} className={styles.image}/>
    }
  </div>
)

export default UserPhoto
