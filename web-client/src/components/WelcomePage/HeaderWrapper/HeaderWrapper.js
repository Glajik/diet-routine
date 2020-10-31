import React from 'react'
import HeaderPhrase from './HeaderPhrase/HeaderPhrase'
import {logo} from '../../../assets'
import { HeaderImageDiv, LogoWrapper } from './style'

const HeaderWrapper = () => {
    return (
        <HeaderImageDiv>
            <LogoWrapper src={logo} />
            <HeaderPhrase />
        </HeaderImageDiv>
    )
}

export default HeaderWrapper