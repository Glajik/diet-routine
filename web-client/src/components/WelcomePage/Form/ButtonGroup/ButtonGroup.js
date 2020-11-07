import React from 'react'
import { FormattedMessage } from 'react-intl'

import { ButtonsDiv, ButtonDiv } from './style'
import { Button } from '../../../UI/Button/style'
import { useHistory } from 'react-router-dom'

const ButtonGroup = () => {
  const history = useHistory();
  return (
    <ButtonsDiv>
      <ButtonDiv>
        <Button btnType="secondary">
          <FormattedMessage id="haveAccountBtn" />
        </Button>
      </ButtonDiv>
      <ButtonDiv>
        <Button onClick={() => history.push('/features')} btnType="primary">
          <FormattedMessage id="nextBtn" />
        </Button>
      </ButtonDiv>
    </ButtonsDiv>
  )
}

export default ButtonGroup
