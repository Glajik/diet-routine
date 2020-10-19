import React from 'react'
import {Button, Icon} from './style'

const button = (props) => (
  <Button 
    type={props.type}
    btnType={props.btnType || 'primary'}
    disabled={props.disabled}
    onClick={props.onClick}>
      <Icon
        className={props.leftIconClassNames}
        leftIcon
        iconColor={props.iconColor}/>
      {props.children}
      <Icon
        className={props.rightIconClassNames}
        rightIcon
        iconColor={props.iconColor}/>
    </Button>
)

export default button