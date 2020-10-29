import React from 'react'
import { FieldsDiv, FormDiv, AnimatQuestion } from './style'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import { useState } from 'react/cjs/react.development'
import { FormattedMessage } from 'react-intl'
import Field from '../../UI/Field'
import { Label } from '../../UI/Field/style'

const Form = () => {
  const [values, setValues] = useState('')

  

  return (
    <FormDiv>
      <AnimatQuestion>
        <Label>
          <FormattedMessage id="nameQuestion" />
        </Label>
      </AnimatQuestion>
      <FieldsDiv>
        <Field />
        <ButtonGroup />
      </FieldsDiv>
    </FormDiv>
  )
}

export default Form
