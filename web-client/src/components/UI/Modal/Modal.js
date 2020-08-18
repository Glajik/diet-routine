import React from 'react'
import Button from '../Button'
import classes from './Modal.module.css'

const modal = props => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
      }}>
      <h2>{props.message}</h2>
      <Button
        action="Cancel"
        clicked={props.buttonClicked} />
    </div>
  )
}

export default modal