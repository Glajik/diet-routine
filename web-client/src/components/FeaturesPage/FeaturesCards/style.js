import styled from 'styled-components'
import img from '../../../assets/images/bgFeatures.png'

export const Wrapper = styled.div`
display: flex;
align-items:center;
flex-direction: column;
max-width: 360px;
`
export const Title = styled.h1`
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 55px;
color: #9D53B4;
`
export const CardContainer = styled.div`
background: url(${img}) no-repeat center center;
mix-blend-mode: darken;
background-size: cover;
`

export const BackgroundGradient = styled.div`
background: linear-gradient(180deg, rgba(13, 10, 1, 0.42) 0%, rgba(13, 10, 1, 0.525) 60.94%);
display: flex;
align-items:center;
flex-direction: row;
max-width: 360px;
`

export const Feature = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`
export const Slider = styled.div`
position: absolute;
height: 16vh;
width: 20px;
`

export const Vector = styled.img`
`
