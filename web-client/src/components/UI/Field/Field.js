import React from 'react'
import {
  FieldWrapper,
  Input,
  Label,
  Error
} from './style'

const field = (props) => (
  <FieldWrapper>
    {/* <Label>{props.label}</Label> */}
    <Input
        style={props.style}
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}/>
    <Error>{props.errorMessage}</Error>
  </FieldWrapper>
)

export default field
