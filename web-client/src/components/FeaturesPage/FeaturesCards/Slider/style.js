import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: row;
max-width: 360px;
`

export const WrapperBlock = styled.div`
display: flex;
align-items: center;
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

export const Feature = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`
export const Bar = styled.div`
height: 16vh;
width: 20px;
padding: 11px;
margin-top: 40px;
`
export const FeatureTitle = styled.h2`
font-weight: 300;
font-style: normal;
font-size: 24px;
line-height: 31px;
color: #FFFFFF;
margin: 14px 17px;
`
export const FeatureDescription = styled.p`
color: #FFFFFF;
margin: 0px 0px 0px 19px;
font-size: 16px;
line-height: 24px;
`
export const Detailed = styled.button`
font-size: 18px;
line-height: 23px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #FFFFFF;
background: none;
border: 0;
`

export const Dot = styled.button`
background: ${ ({card}) => card.isActive ? '#9D53B4' : '#FFFFFF'};
border: 0;
width: 12px;
height: 12px;
border-radius: 50%;
`