import React from 'react'
import { LinkPhrase, LogoWrapper, MainDiv } from './style'
import logo from '../../assets/images/logo_first_page.svg'
import { NavLink } from 'react-router-dom'

const FirstPage = () => {
    return (
        <MainDiv>
            <LogoWrapper src={logo} />
            <NavLink to='welcome_page' className="link">
                <LinkPhrase>
                    Подойди к своему рациону уверенно
                </LinkPhrase>
            </NavLink>
        </MainDiv>
    )
}

export default FirstPage
