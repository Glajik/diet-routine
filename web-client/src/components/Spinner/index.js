import React from 'react'
import { Spin } from 'antd'

import styles from './index.module.css'

const Spinner = () => (
  <div className={styles.container}>
    <Spin size="large" />
  </div>
)

export default Spinner
