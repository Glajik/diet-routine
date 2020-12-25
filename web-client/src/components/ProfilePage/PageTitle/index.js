import { divide } from 'lodash'
import React from 'react'
import styles from './index.module.css'

const PageTitle = ({ children }) => (
  <div className={styles.container}>
    <h1 className={styles.header}>
      {children}
    </h1>
  </div>
)

export default PageTitle
