import React, { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import {logoFirstPage} from '../../assets'
import { LinkPhrase, LogoWrapper, MainDiv } from './style'

const FirstPage = () => {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push('/welcome_page')
    }, 1500)
  }, [history])

  return (
    <MainDiv>
      <LogoWrapper src={logoFirstPage} />
      <NavLink to="welcome_page" className="link">
        <LinkPhrase>
          <FormattedMessage id="approachYourDietWithConfidence" />
        </LinkPhrase>
      </NavLink>
    </MainDiv>
  )
}

export default FirstPage
