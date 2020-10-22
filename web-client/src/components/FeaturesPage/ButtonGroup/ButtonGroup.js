import React from 'react'
import { ButtonsDiv, ButtonDiv } from './style'
import { Button } from '../../UI/Button/style'

const ButtonGroup = () => {

    return (
        <ButtonsDiv>
            <ButtonDiv>
                <Button btnType='secondary'>Регистрация</Button>
            </ButtonDiv>
            <ButtonDiv>
                <Button btnType='primary'>Уже начать</Button>
            </ButtonDiv>
        </ButtonsDiv>
    )
}

export default ButtonGroup