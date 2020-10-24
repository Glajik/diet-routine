import React from 'react'
import { injectIntl } from 'react-intl'
import { FormattedMessage } from 'react-intl'
import { HeaderImageDiv, LogoWrapper, HeaderTitle, HeaderAuthor } from './style'
import logo from '../../../assets/images/logo.svg'

const HeaderWrapper = () => {
  return (
    <HeaderImageDiv>
      <LogoWrapper src={logo} />
      <HeaderTitle>
        <FormattedMessage id="createAccount" />
      </HeaderTitle>
      <HeaderAuthor>Сергей</HeaderAuthor>
    </HeaderImageDiv>
  )
}

export default injectIntl(HeaderWrapper)
