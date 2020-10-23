import React from 'react'
import { FieldsDiv, FormDiv } from './style'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import { useState } from 'react/cjs/react.development'

import Field from '../../UI/Field'
import { Label } from '../../UI/Field/style'


const Form = () => {
  const [values, setValues] = useState('')

  const onOnwardBtnClick = () => {
    console.log(values)
    setValues('')
  }

  return (
    <FormDiv>
      <Label>Как тебя зовут?</Label>
      <FieldsDiv>
        <Field />
        <ButtonGroup onOnwardBtnClick={onOnwardBtnClick} />
      </FieldsDiv>
    </FormDiv>
  )
}

export default Form
