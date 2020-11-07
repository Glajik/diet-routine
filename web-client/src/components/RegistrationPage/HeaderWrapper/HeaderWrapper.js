import React, { useRef, useState } from 'react'
import { injectIntl } from 'react-intl'
import { FormattedMessage } from 'react-intl'
import { HeaderImageDiv, LogoWrapper, HeaderTitle, HeaderAuthor } from './style'
import logo from '../../../assets/images/logo.svg'
import EditName from './EditName'

const HeaderWrapper = props => {
  const inputRef = useRef()
  const inputNameUserSignUp = props.intl.formatMessage({ id: 'inputNameUserSignUp' })
  const [name, setName] = useState('')

  return (
    <HeaderImageDiv>
      <LogoWrapper src={logo} />
      <HeaderTitle>
        <FormattedMessage id="signUp" />
      </HeaderTitle>
      <HeaderAuthor>
        <EditName text={name} placeholder="Сергей" childRef={inputRef} type="input">
          <input
            ref={inputRef}
            type="text"
            name="name"
            placeholder={inputNameUserSignUp}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </EditName>
      </HeaderAuthor>
    </HeaderImageDiv>
  )
}

export default injectIntl(HeaderWrapper)
