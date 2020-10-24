import React, {useState} from 'react'
import { Wrapper, Dot, Title, Vector, CardContainer, BackgroundGradient } from '../FeaturesCards/style'
import Slider from './Slider/Slider'

const FeaturesCards = () => {
    const [cards, setCards] = useState([
        {
            title: 'Умные порции',
            description: 'Больше нет нужды прописывать все в граммах. Наше приложение умеет различать продукты. Яблоки измеряются в штуках, а чипсы в пачках. Кроме того, вы сможете настроить свои.',
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
            <Title>Возможности</Title>
            <CardContainer>
                <BackgroundGradient>
                    <Slider cards={cards} handleDot={handleDot}/>
                </BackgroundGradient>
            </CardContainer>
        </Wrapper>
    )
}

export default FeaturesCards