import React from 'react'
import { ButtonsDiv, ButtonDiv } from './style'
import { Button } from '../../../../UI/Button/style'

const ButtonGroup = () => {

    return (
        <ButtonsDiv>
            <ButtonDiv>
                <Button btnType='secondary'>УЖЕ ЕСТЬ АККАУНТ</Button>
            </ButtonDiv>
            <ButtonDiv>
                <Button btnType='primary'>ДАЛЬШЕ</Button>
            </ButtonDiv>
        </ButtonsDiv>
    )
}

export default ButtonGroup