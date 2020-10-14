import styled from 'styled-components'
import img from '../../assets/images/miaso-pomidory-razdelochnaia-doska-doski-kusochki-porezannoe.png'

export const MainDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:flex-end;
    background-image: url(${img});
    background-size: cover; 
    min-height: 100vh;
`

export const LogoWrapper = styled.img`
`

export const LinkPhrase = styled.p`
    font-family: IBM Plex Sans;
    font-style: normal;
    color: #94AE27;
    line-height: 31px;
    font-weight: 300;
    font-size: 24px;
    text-align: center;
    text-decoration: none;
`