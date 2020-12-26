import React from 'react'
import styles from './IconButton.module.css'

const IconButton = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.invisible}>
    {children}
  </button> 
)

export default IconButton
