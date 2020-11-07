import React from 'react'
import { FieldsDiv, FormDiv, AnimatQuestion } from './style'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import { FormattedMessage } from 'react-intl'
import Field from '../../UI/Field'
import { Label } from '../../UI/Field/style'

const Form = () => {
  return (
    <FormDiv>
      <AnimatQuestion>
        <Label>
          <FormattedMessage id="nameQuestion" />
        </Label>
      </AnimatQuestion>
      <FieldsDiv>
        <Field label="jhi" />
        <ButtonGroup />
      </FieldsDiv>
    </FormDiv>
  )
}

export default Form
