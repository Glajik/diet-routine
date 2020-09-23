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

    display:flex;
    flex-direction:column;
    flex-grow:1 3;
    align-items:center;
    justify-content:space-around;
`

export const LogoWrapper = styled.img`
    margin-top: -30px;
`

export const PhraseDiv = styled.div`

`
export const HeaderPhrase = styled.h1`
    font-family: IBM Plex Sans;
    font-style: italic;
    font-weight: 500;
    font-size: 35px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
`

export const PhraseAuthor = styled.p`
    font-family: IBM Plex Sans;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin-top: -20px;
`

export const FormWrapper = styled.div`
    background-color: white; 
    min-height: 47vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NameQuestion = styled.h1`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 42px;
    line-height: 48px;
    color: #000000;
`