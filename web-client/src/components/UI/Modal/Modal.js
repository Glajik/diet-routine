import React from 'react'
import Button from '../Button'
import {Modal, Header} from './style'

const modal = (props) => {
  return (
    <Modal show={props.show}>
      <Header>{props.message}</Header>
      <Button
        action="Cancel"
        clicked={props.clicked} />
    </Modal>
  )
}

export default modal