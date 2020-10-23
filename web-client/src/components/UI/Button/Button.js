import React from 'react'
import {Button} from './style'

const button = (props) => (
  <Button 
    type={props.type}
    btnType={props.btnType}
    action={props.action}
    disabled={props.disabled}
    onClick={props.onClick}>
      {props.children}
    </Button>
)

export default button