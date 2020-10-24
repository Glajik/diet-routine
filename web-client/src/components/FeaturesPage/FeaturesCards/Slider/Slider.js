import React from 'react'
import { Wrapper, Dot, Title, Vector, CardContainer, BackgroundGradient, Feature, Bar, FeatureTitle, FeatureDescription, Detailed } from './style'
import {ReactComponent as Arrow} from '../../../../assets/images/arrowRight.svg'

const Slider = ({cards, handleDot}) => {
    return (
        <Wrapper>
            {cards.filter(card => card.isActive).map(card => {
                return (
                    <Feature>
                        <FeatureTitle>{card.title}</FeatureTitle>
                        <FeatureDescription>{card.description}</FeatureDescription>
                        <Detailed>Подробнее<Arrow /></Detailed>
                    </Feature>
                )
            })}
            <Bar>
                {cards.map((card, i) => <Dot key={i} card={card} value={i} onClick={()=>handleDot(i)}/>)}
            </Bar>
        </Wrapper>
    )
}

export default Slider