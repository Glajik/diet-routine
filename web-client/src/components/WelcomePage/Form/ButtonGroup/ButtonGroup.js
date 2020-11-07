import React from 'react'
import { ButtonsDiv, ButtonDiv } from './style'
import { FormattedMessage } from 'react-intl'
import { Button } from '../../../UI/Button/style'

const ButtonGroup = () => {
  return (
    <ButtonsDiv>
      <ButtonDiv>
        <Button btnType="secondary">
          <FormattedMessage id="haveAccountBtn" />
        </Button>
      </ButtonDiv>
      <ButtonDiv>
        <Button btnType="primary">
          <FormattedMessage id="nextBtn" />
        </Button>
      </ButtonDiv>
    </ButtonsDiv>
  )
}

export default ButtonGroup
