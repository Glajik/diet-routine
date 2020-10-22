import React from 'react'
import { ReactComponent as LogoSvg } from '../../../assets/images/logo_feature.svg'
import { ReactComponent as Backdrop } from '../../../assets/images/backdrop.svg'
import { Wrapper } from './style'

const Logo = () => {
    return (
        <Wrapper>
            <Backdrop /> 
            <LogoSvg />
        </Wrapper>
    )
}

export default Logo