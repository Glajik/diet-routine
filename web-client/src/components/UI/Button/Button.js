import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Button} from './style'

const button = (props) => (
  <Button
    type={props.type}
    action={props.action}
    disabled={props.disabled}
    onClick={props.clicked}>
      <FormattedMessage id={props.action}/>
    </Button>
)

export default button