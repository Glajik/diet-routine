import React from 'react'
import {FormattedMessage} from 'react-intl'
import Button from '../Button'
import {Header, Modal} from './style'

const modal = (props) => (
  <Modal show={props.show}>
    <Header>
      <FormattedMessage id={props.message}/>
    </Header>
    <Button
      action="cancel"
      clicked={props.clicked}/>
  </Modal>
)

export default modal