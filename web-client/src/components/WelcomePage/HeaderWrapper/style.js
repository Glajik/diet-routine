import styled from 'styled-components'
import {welcomeImg} from '../../../assets'

export const HeaderImageDiv = styled.div`
background: linear-gradient(rgba(28, 53, 2, 0.5), rgba(28, 53, 2, 0.5)), url(${welcomeImg}) center top no-repeat;
background-size: cover;  
min-height: 53vh;

display:flex;
flex-direction:column;
flex-grow:1 3;
align-items:center;
justify-content:space-around;
`

export const LogoWrapper = styled.img`
margin-top: -10px;
`