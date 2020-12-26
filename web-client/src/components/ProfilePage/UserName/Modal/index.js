import React from 'react'
import { Drawer } from 'antd'
import styles from './index.module.css'

const Modal = ({ title, onClose, visible, children, height = 220 }) => (
  <Drawer
    title={title}
    placement="bottom"
    closable={true}
    visible={visible}
    onClose={onClose}
    destroyOnClose
    key="bottom"
    height={height}>
      {children}
  </Drawer>
)

export default Modal
