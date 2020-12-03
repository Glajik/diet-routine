import React from 'react'
import Logo from '../FeaturesPage/Logo/Logo'
import { Wrapper } from '../FeaturesPage/style'
import { Preview } from './style'

const FeaturesPreview = () => {
    return (
        <Wrapper>
            <Logo />
            <Preview>Добро пожаловать, Антонина</Preview>
        </Wrapper>
    )
}

export default FeaturesPreview