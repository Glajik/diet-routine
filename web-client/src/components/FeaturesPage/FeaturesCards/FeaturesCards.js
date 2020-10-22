import React from 'react'
import { Wrapper, Dot, Title, Vector, CardContainer, BackgroundGradient, Feature, Slider, FeatureTitle, FeatureDescription, Detailed } from '../FeaturesCards/style'
import arrow from '../../../assets/images/arrowRight.svg'

const FeaturesCards = () => {
    return (
        <Wrapper>
            <Title>Возможности</Title>
            <CardContainer>
                <BackgroundGradient>
                    <Feature>
                        <FeatureTitle>Умные порции</FeatureTitle>
                        <FeatureDescription>Больше нет нужды прописывать все в граммах. Наше приложение умеет различать продукты. Яблоки измеряются в штуках, а чипсы в пачках. Кроме того, вы сможете настроить свои.</FeatureDescription>
                        <Detailed>Подробнее<Vector src={arrow}/></Detailed>
                    </Feature>
                    <Slider>
                        <Dot />
                        <Dot />
                        <Dot />
                        <Dot />
                        <Dot />
                    </Slider>
                </BackgroundGradient>
            </CardContainer>
        </Wrapper>
    )
}

export default FeaturesCards