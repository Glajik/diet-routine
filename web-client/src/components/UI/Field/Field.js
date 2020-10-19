import React from 'react'
import {Error, FieldWrapper, Input, Label, Icon} from './style'

const field = (props) => (
  <FieldWrapper>
    <Label
      isValid={props.isValid}
      isTouched={props.isTouched}>{props.label}</Label>
    <Icon
      className={props.leftIconClassNames}
      leftIcon
      isValid={props.isValid}
      isTouched={props.isTouched}
      iconColor={props.iconColor}/>
    <Input
      type={props.type}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      isValid={props.isValid}
      isTouched={props.isTouched}
      leftIconClassNames={props.leftIconClassNames}
      rightIconClassNames={props.rightIconClassNames}
      onChange={props.onChange}/>
    <Icon
      className={props.rightIconClassNames}
      rightIcon
      isValid={props.isValid}
      isTouched={props.isTouched}
      iconColor={props.iconColor}/>
    <Error
      isValid={props.isValid}
      isTouched={props.isTouched}>{props.errorMessage}</Error>
  </FieldWrapper>
)

export default field
