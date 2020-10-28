import React from 'react'
import { Wrapper, Dot, Feature, Bar, FeatureTitle, FeatureDescription, Detailed } from './style'
import {ReactComponent as Arrow} from '../../../../assets/images/arrowRight.svg'

const Slider = ({cards, handleDot}) => {
    return (
        <Wrapper>
            {cards.filter(card => card.isActive).map((card, i) => {
                return (
                    <Feature key={i}>
                        <FeatureTitle className='feature_title'>{card.title}</FeatureTitle>
                        <FeatureDescription className='feature_description'>{card.description}</FeatureDescription>
                        <Detailed className='detailed'>Подробнее<Arrow /></Detailed>
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