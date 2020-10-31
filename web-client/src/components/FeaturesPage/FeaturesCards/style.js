import styled from 'styled-components'
import {bgFeatures} from '../../../assets'

export const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content:space-around;
flex-direction: column;
`
export const Title = styled.h1`
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 55px;
color: #9D53B4;
`
export const CardContainer = styled.div`
background: url(${bgFeatures}) no-repeat center center;
mix-blend-mode: darken;
height: 32vh;
width: 100vw;
max-width: 480px;
background-size: cover;
`

export const BackgroundGradient = styled.div`
background: linear-gradient(180deg, rgba(13, 10, 1, 0.42) 0%, rgba(13, 10, 1, 0.525) 60.94%);
height: 32vh;
display: flex;
align-items:center;
justify-content:space-around;
flex-direction: row;
`

export const Feature = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`
export const Slider = styled.div`
height: 16vh;
width: 20px;
`

export const Vector = styled.img`
`
