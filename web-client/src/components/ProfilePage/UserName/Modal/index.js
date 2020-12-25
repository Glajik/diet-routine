import React from 'react'
import { Drawer } from 'antd'
import styles from './index.module.css'

const Modal = ({ onClose, visible, children, height=160 }) => (
  <Drawer
    placement="bottom"
    closable={true}
    visible={visible}
    onClose={onClose}
    key="bottom"
    height={height}>
    <div className={styles.container}>
      {children}
    </div>
  </Drawer>
)

export default Modal
