import React from 'react'
import { FormDiv, NameQuestion } from './style'
import Form from './Form/Form'

const FormWrapper = () => {
  return (
    <>
      <FormDiv>
        <NameQuestion>Как тебя зовут?</NameQuestion>
      </FormDiv>
      <Form />
    </>
  )
}

export default FormWrapper
