import React, { useEffect } from 'react'
import { LinkPhrase, LogoWrapper, MainDiv } from './style'
import logo from '../../assets/images/logo_first_page.svg'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const FirstPage = () => {
    const history = useHistory()


    useEffect(() => {
        setTimeout(() => {
            history.push('/welcome_page')
        }, 1500)
    }, [])

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
