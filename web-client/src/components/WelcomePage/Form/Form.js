import React, {useState} from 'react'
import { FormattedMessage } from 'react-intl'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import {Field} from '../../UI'
import { Label } from '../../UI/Field/style'
import { FieldsDiv, FormDiv, AnimatQuestion } from './style'

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
