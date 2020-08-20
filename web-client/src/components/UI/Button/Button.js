import React from 'react'
import {Button} from './style'

const button = (props) => (
  <Button
    type={props.type}
    action={props.action}
    isLoading={props.isLoading}
    disabled={props.disabled}
    onClick={props.clicked}>{props.action}</Button>
)

export default button