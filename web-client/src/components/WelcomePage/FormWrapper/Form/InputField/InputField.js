import React from 'react'
import { Input, Label } from '../../../../UI/Field/style'
import { InputDiv } from './style'

const InputField = () => {
    return (
        <InputDiv>
            <Label>Как тебя зовут?</Label>
            <Input />
        </InputDiv>
    )
}

export default InputField