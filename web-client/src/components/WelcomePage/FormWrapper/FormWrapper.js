import React, { useState } from 'react'
import { FormDiv, NameQuestion } from './style'
import Form from './Form/Form'

const FormWrapper = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleNameQuestion = () => {
        setIsChecked(true)
    }

    return (
        <>
            {isChecked ?
                <Form /> :
                <FormDiv>
                    <NameQuestion onClick={handleNameQuestion}>
                        Как тебя зовут?
            </NameQuestion>
                </FormDiv>
            }
        </>
    )
}

export default FormWrapper