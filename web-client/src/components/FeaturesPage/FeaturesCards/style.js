import styled from 'styled-components'
import img from '../../../assets/images/bgFeatures.png'

export const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content:space-around;
flex-direction: column;
`
export const Title = styled.h1`
font-family: Ubuntu;
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 55px;
color: #9D53B4;
`
export const CardContainer = styled.div`
background: url(${img}) no-repeat center center;
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
export const FeatureTitle = styled.h2`
font-family: IBM Plex Sans;
font-weight: 300;
font-size: 24px;
line-height: 31px;
color: #FFFFFF;
margin: 14px 17px;
`
export const FeatureDescription = styled.p`
color: #FFFFFF;
margin: 10px 19px;
width: 80vw;
max-width: 360px;
font-family: IBM Plex Sans;
font-size: 16px;
line-height: 21px;
`
export const Detailed = styled.button`
font-family: IBM Plex Sans;
font-weight: bold;
font-size: 18px;
line-height: 23px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #FFFFFF;
background: none;
border: 0;
`
export const Vector = styled.img`
`
export const Dot = styled.button`
background: #9D53B4;
border: 0;
width: 12px;
height: 12px;
border-radius: 50%;
`