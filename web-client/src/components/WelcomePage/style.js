import styled from 'styled-components'
import img from '../../assets/images/welcome_image.png'



export const Wrapper = styled.div`
display:flex;
flex-direction:column;
`
export const HeaderImageDiv = styled.div`
background: linear-gradient(rgba(28, 53, 2, 0.5), rgba(28, 53, 2, 0.5)), url(${img}) center top no-repeat;
background-size: cover;  
min-height: 50vh;
`


export const LogoWrapper = styled.img`
position: absolute;
width: 180px;
height: 35px;
left: 90px;
top: 15px;
`

export const HeaderPhrase = styled.h2`

position: absolute;
left: 10.56%;
right: 10.41%;
top: 18.59%;
bottom: 62.98%;

font-family: IBM Plex Sans;
font-style: italic;
font-weight: 500;
font-size: 32px;
line-height: 42px;
text-align: center;

color: #FFFFFF;
`