import React from 'react'
import { FormDiv } from './style'
import InputField from './InputField/InputField'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import { useState } from 'react/cjs/react.development'


const Form = () => {
    const [values, setValues] = useState('')

    const onOnwardBtnClick = () => {
        console.log(values)
        setValues('')
    }

    return (
        <FormDiv>
            <InputField values={values} setValues={setValues} />
            <ButtonGroup onOnwardBtnClick={onOnwardBtnClick} />
        </FormDiv>
    )
}

export default Form