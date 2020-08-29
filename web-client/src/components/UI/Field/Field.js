import React from 'react'
import {
  FieldWrapper,
  Input,
  Label,
  Error
} from './style'

const field = (props) => {
  let fieldType

  switch (props.folderType) {
    case 'input':
      fieldType = (
        <Input
          type={props.type}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.changed}/>
      )
      break
    case 'textarea':
      fieldType = (
        <textarea
          cols="30"
          rows="10"
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}/>
      )
      break
    case 'select':
      fieldType = (
        <select name={props.name}>
          {props.options.map(option => <option>{option}</option>)}
        </select>
      )
      break
    default:
      fieldType = (
        <Input
          type={props.type}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.changed}/>
      )
  }

  return (
    <FieldWrapper>
      <Label>{props.label}</Label>
      {fieldType}
      <Error>{props.errorMessage}</Error>
    </FieldWrapper>
  )
}

export default field