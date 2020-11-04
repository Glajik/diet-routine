import React from 'react'
import { Preview } from './style'
import { Wrapper } from '../FeaturesPage/style'
import Logo from '../FeaturesPage/Logo/Logo'

const FeaturesPreview = () => {
    return (
        <Wrapper>
            <Logo />
            <Preview>Добро пожаловать, Антонина</Preview>
        </Wrapper>
    )
}

export default FeaturesPreview