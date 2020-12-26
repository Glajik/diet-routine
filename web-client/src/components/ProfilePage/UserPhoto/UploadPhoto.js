import React, { useState } from 'react'
import styles from './UploadPhoto.module.css'
import { LoadingOutlined, PlusCircleOutlined } from '@ant-design/icons'

/**
 * Various checks to see if this file can be loaded
 * @param {File} file File instance
 */
function canUpload(file) {
  if (!file) {
    throw new Error("Can't take the file for some reason!")
  }
  const isJpgOrPng = ['image/jpeg', 'image/png'].includes(file.type)
  if (!isJpgOrPng) {
    throw new Error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size <= 1024 ** 2 * 2
  if (!isLt2M) {
    throw new Error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const UploadPhoto = ({ onPick }) => {
  // Used to indicate loading process
  const [loading, setLoading] = useState(false)

  const onSuccess = () => {
    console.log('Success uploading')
    setLoading(false)
  }

  const onFail = reason => {
    setLoading(false)
    throw new Error(`Photo upload error. Reason: ${reason}`)
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

  const StateIcon = (props) =>
    loading ? <LoadingOutlined {...props} /> : <PlusCircleOutlined {...props} />

  return (
    <div className={styles.container}>
      <StateIcon className={styles.icon} />
      <input
        className={styles.fileInput}
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default UploadPhoto
