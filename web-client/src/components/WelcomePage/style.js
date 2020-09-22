import styled from 'styled-components'
import img from '../../assets/images/welcome_image.png'


export const Wrapper = styled.div`
display:flex;
flex-direction:column;
`
export const HeaderImageDiv = styled.div`
background: linear-gradient(rgba(28, 53, 2, 0.5), rgba(28, 53, 2, 0.5)), url(${img}) center top no-repeat;
background-size: cover;  
min-height: 53vh;
`


export const LogoWrapper = styled.img`
position: absolute;
width: 180px;
height: 35px;
left: 25%;
top: 3%;
`

export const HeaderPhrase = styled.h2`
position: absolute;
left: 10%;
right: 10%;
top: 15%;
font-family: IBM Plex Sans;
font-style: italic;
font-weight: 500;
font-size: 32px;
line-height: 42px;
text-align: center;
color: #FFFFFF;
`

export const PhraseAuthor = styled.p`
position: absolute;
width: 150px;
height: 20px;
left: 106px;
top: 253px;

font-family: IBM Plex Sans;
font-style: italic;
font-weight: 500;
font-size: 14px;
line-height: 18px;
text-align: center;

color: #FFFFFF;
`