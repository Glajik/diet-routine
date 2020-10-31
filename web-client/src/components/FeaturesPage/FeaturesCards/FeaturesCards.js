import React, {useState} from 'react'
import { FormattedMessage } from 'react-intl'

import Slider from './Slider/Slider'
import {
  Wrapper,
  Title,
  CardContainer,
  BackgroundGradient
} from '../FeaturesCards/style'

const FeaturesCards = () => {
    const [cards, setCards] = useState([
        {
            title: <FormattedMessage id='smartPortions'/>,
            description: <FormattedMessage id='smartPortionsDescription'/>,
            isActive: true,
        },
        {
            title: '222222222',
            description: '2222222222222222222',  
            isActive: false,          
        },
        {
            title: '33333333',
            description: '33333333333333333333',
            isActive: false,            
        },
        {
            title: '44444444',
            description: '44444444444444444',            
            isActive: false,
        },
        {
            title: '55555555555',
            description: '5555555555555',          
            isActive: false,  
        },
    ])

    const handleDot = (i) => {
        setCards(
            cards.map((card, index) => {
                if(card.isActive) {
                    card.isActive = !card.isActive
                }
                if(index===i) {
                    card.isActive = !card.isActive
                }
                return card
            })
        )
    }

    return (
        <Wrapper>
            <Title id='features_title'><FormattedMessage id='features'/></Title>
            <CardContainer>
                <BackgroundGradient>
                    <Slider cards={cards} handleDot={handleDot}/>
                </BackgroundGradient>
            </CardContainer>
        </Wrapper>
    )
}

export default FeaturesCards