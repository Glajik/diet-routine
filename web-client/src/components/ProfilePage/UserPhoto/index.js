import React from 'react'
import styles from './index.module.css'
import UploadPhoto from './UploadPhoto'

const UserPhoto = ({ photoURL, onPick }) => (
  <div className={styles.container}>
    {
      !photoURL
        ? <UploadPhoto onPick={onPick} />
        : <img src={photoURL} className={styles.image}/>
    }
  </div>
)

export default UserPhoto
