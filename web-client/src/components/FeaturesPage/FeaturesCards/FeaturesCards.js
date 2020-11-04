import React, {useState} from 'react'
import { Wrapper, Title, CardContainer, BackgroundGradient } from '../FeaturesCards/style'
import Slider from './Slider/Slider'
import { FormattedMessage } from 'react-intl'

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

    const sliderBlock = document.getElementById('SliderBlock');

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

    const handleSlider = (e) => {
        const cordTop = sliderBlock.getBoundingClientRect().y;
        const cordBottom = sliderBlock.getBoundingClientRect().bottom;
        const cordMiddle = (cordTop + cordBottom) / 2;
        const i = cards.map(card => card.isActive).indexOf(true);
        if (e.clientY > cordMiddle) {
            console.log('bottom', i);
            (i + 1) > (cards.length - 1) ? handleDot(0) : handleDot(i + 1);
        } else if (e.clientY < cordMiddle) {
            console.log ('top', i);
            (i - 1) < 0 ? handleDot(cards.length - 1) : handleDot(i - 1);
        } else return ''
    }

    return (
        <Wrapper>
            <Title id='features_title'><FormattedMessage id='features'/></Title>
            <CardContainer>
                <BackgroundGradient>
                    <Slider cards={cards} handleDot={handleDot} handleSlider={handleSlider}/>
                </BackgroundGradient>
            </CardContainer>
        </Wrapper>
    )
}

export default FeaturesCards