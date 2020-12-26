import React, { useState } from 'react'
import styles from './index.module.css'
import { EditOutlined } from '@ant-design/icons'
import IconButton from './IconButton'
import UserNameForm from './Form'
import Modal from './Modal'

const UserName = ({ children: name, onChange }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <p className={styles.body}>
          <span>{name}</span>
          <IconButton onClick={() => setModalVisible(true)}>
            <EditOutlined className={styles.icon}/>
          </IconButton>
        </p>
      </div>
      <Modal
        title="Edit Name"
        onClose={() => setModalVisible(false)}
        visible={modalVisible}
      >
        <UserNameForm name={name} onFinish={values => console.log("New username form result:", values)} />
      </Modal>
    </>
  )
}

export default UserName
