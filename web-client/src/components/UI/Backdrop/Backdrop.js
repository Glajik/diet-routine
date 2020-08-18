import React from 'react'
import classes from './Backdrop.module.css'

const backdrop = props => {
  return (
    <div
      className={classes.Backdrop}
      style={{
        bottom: props.show ? '0' : '100vh'
      }}
      onClick={props.clicked} />
  )
}

export default backdrop