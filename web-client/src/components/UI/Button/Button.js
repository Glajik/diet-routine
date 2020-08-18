import React from 'react'
import {Button} from './style'

const button = (props) => (
  <Button
    type={props.type}
    onClick={props.clicked}
    action={props.action}
    isLoading={props.isLoading}
    disabled={props.disabled}>{props.action}</Button>
)

export default button