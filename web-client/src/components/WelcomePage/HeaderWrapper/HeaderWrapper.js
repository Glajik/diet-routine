import React from 'react'
import HeaderPhrase from './HeaderPhrase/HeaderPhrase'
import { HeaderImageDiv, LogoWrapper } from './style'
import logo from '../../../assets/images/logo.svg'

const HeaderWrapper = () => {
    return (
        <HeaderImageDiv>
            <LogoWrapper src={logo} />
            <HeaderPhrase />
        </HeaderImageDiv>
    )
}

export default HeaderWrapper