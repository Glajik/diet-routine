import React, { useState } from 'react'
import { LoadingOutlined, PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Skeleton, message } from 'antd'
import getTextAvatarUrl from './getTextAvatarUrl'
import styles from './index.module.css'

/**
 * Various checks to see if this file can be loaded
 * @param {File} file File instance
 */
function canUpload(file) {
  if (!file) {
    message.error("Can't upload the file for some reason!")
  }
  const isJpgOrPng = ['image/jpeg', 'image/png'].includes(file.type)
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size <= 1024 ** 2 * 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const UserPhoto = ({ photoURL, name, onPick, skeleton, isLoading }) => {
  // Used to indicate loading process
  const [loading, setLoading] = useState(false)

  if (skeleton) {
    return (
      <div className={styles.container}>
        <Skeleton.Avatar
          active={!!isLoading}
          className={styles.skeleton}
          style={{ width: 64, height: 64 }}
        />
      </div>
    )
  }

  const onSuccess = () => {
    setLoading(false)
  }

  const onFail = reason => {
    setLoading(false)
    console.error(`Photo upload error. Reason: ${reason}`)
    message.error(`Upload failed`)
  }

  // Сhecks if the file meets the conditions and passes it
  // to the callback
  const onChangeHandler = e => {
    const [file] = e.target.files
    if (canUpload(file)) {
      setLoading(true)
      onPick(file, onSuccess, onFail)
    }
  }

  /**
   * Depends from incoming data, can show user photo, or text avatar,
   * if user didn't upload photo. Also show icons, that indicates uploading
   * state.
   */
  const renderAvatar = () => {
    if (loading) {
      return <LoadingOutlined className={styles.icon} />
    }
    if (photoURL) {
      return <img src={photoURL} className={styles.image} />
    }
    if (name) {
      return <img src={getTextAvatarUrl(name)} className={styles.image} />
    }
    return <PlusOutlined className={styles.icon} />
  }

  return (
    <div className={styles.container}>
      <figure className={styles.avatar}>
        {renderAvatar()}
        <input
          className={styles.fileInput}
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={onChangeHandler}
        />
      </figure>
    </div>
  )
}

export default UserPhoto
