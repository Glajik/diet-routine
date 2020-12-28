import React, { useState } from 'react'
import styles from './index.module.css'
import { EditOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'
import IconButton from './IconButton'
import UserNameForm from './Form'
import Modal from './Modal'

const UserName = ({ children: name, onChange, skeleton, isLoading }) => {
  const defaultText = 'Type your name'

  const [modalVisible, setModalVisible] = useState(false)

  if (skeleton) {
    return (
      <div className={styles.container}>
        <Skeleton.Button
          active={!!isLoading}
          className={styles.skeleton}
          style={{ width: 200 }}
          buttonShape="round"
          size="small"
          title
        />
      </div>
    )
  }

  const onFinishHandler = ({ name }) => {
    setModalVisible(false)
    onChange(name)
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.body}>
          <span>{name || defaultText}</span>
          <IconButton onClick={() => setModalVisible(true)}>
            <EditOutlined className={styles.icon} />
          </IconButton>
        </p>
      </div>
      <Modal
        title="Edit Name"
        onClose={() => setModalVisible(false)}
        visible={modalVisible}>
        <UserNameForm name={name} onFinish={onFinishHandler} visible={modalVisible}/>
      </Modal>
    </>
  )
}

export default UserName
