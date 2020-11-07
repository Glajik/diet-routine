import React from 'react'
import { injectIntl } from 'react-intl'
import { FormattedMessage } from 'react-intl'
import {
  HeaderImageDiv,
  LogoWrapper,
  HeaderTitle,
  HeaderIcons,
  HeaderIcon,
  HeaderOR,
} from './style'
import logo from '../../../assets/images/logo.svg'
import iconFB from '../../../assets/images/fb.svg'
import iconInstagram from '../../../assets/images/instagram.svg'
import iconTwitter from '../../../assets/images/twitter.svg'
import iconVK from '../../../assets/images/vk.svg'
import iconLinkIn from '../../../assets/images/linkin.svg'

const HeaderWrapper = props => {
  const textForChangeTypeAuthIntl = props.intl.formatMessage({
    id: 'textForChangeTypeAuth',
  })
  return (
    <HeaderImageDiv>
      <LogoWrapper src={logo} />
      <HeaderTitle>
        <FormattedMessage id="logIn" />
      </HeaderTitle>
      <HeaderIcons>
        <HeaderIcon src={iconFB} alt="fb-logo" />
        <HeaderIcon src={iconInstagram} alt="fb-logo" />
        <HeaderIcon src={iconTwitter} alt="fb-logo" />
        <HeaderIcon src={iconVK} alt="fb-logo" />
        <HeaderIcon src={iconLinkIn} alt="fb-logo" />
      </HeaderIcons>
      <HeaderOR>{textForChangeTypeAuthIntl}</HeaderOR>
    </HeaderImageDiv>
  )
}

export default injectIntl(HeaderWrapper)
