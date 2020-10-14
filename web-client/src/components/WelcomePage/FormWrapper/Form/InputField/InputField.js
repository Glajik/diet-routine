import React, { useState } from 'react'
import { Input, Label } from '../../../../UI/Field/style'
import { InputDiv } from './style'

const InputField = ({ values, setValues }) => {

    return (
        <InputDiv>
            <Label>Как тебя зовут?</Label>
            <Input
                onChange={event => setValues(event.target.value)}
                value={values} />
        </InputDiv>
    )
}

export default InputField