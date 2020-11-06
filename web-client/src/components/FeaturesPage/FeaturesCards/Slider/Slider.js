import React from 'react'
import {FormattedMessage} from 'react-intl'
import {ReactComponent as Arrow} from '../../../../assets/images/arrowRight.svg'
import {
  Bar,
  Detailed,
  Dot,
  Feature,
  FeatureDescription,
  FeatureTitle,
  Wrapper,
  WrapperBlock
} from './style'


const Slider = ({cards, handleDot}) => {
  return (
    <WrapperBlock>
      <Wrapper>
        {cards.filter(card => card.isActive).map((card, i) => {
          return (
            <Feature key={i}>
              <FeatureTitle className='feature_title'>{card.title}</FeatureTitle>
              <FeatureDescription className='feature_description'>{card.description}</FeatureDescription>
            </Feature>
          )
        })}
        <Bar>
          {cards.map((card, i) => <Dot key={i} card={card} value={i} onClick={() => handleDot(i)}/>)}
        </Bar>
      </Wrapper>
      <Detailed className='detailed'><FormattedMessage id='detailed'/><Arrow/></Detailed>
    </WrapperBlock>
  )
}

export default Slider