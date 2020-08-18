import React from 'react'
import {
  FolderWrapper,
  Input,
  Label,
  Error
} from './style'

const folder = (props) => {
  let folderType

  switch (props.folderType) {
    case 'input':
      folderType = (
        <Input
          type={props.type}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.changed}/>
      )
      break
    case 'textarea':
      folderType = (
        <textarea
          cols="30"
          rows="10"
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}/>
      )
      break
    case 'select':
      folderType = <select name={props.name}>{props.children}</select>
      break
    default:
      folderType = (
        <Input
          type={props.type}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.changed}/>
      )
  }

  return (
    <FolderWrapper>
      <Label>{props.label}</Label>
      {folderType}
      <Error>{props.errorMessage}</Error>
    </FolderWrapper>
  )
}

export default folder