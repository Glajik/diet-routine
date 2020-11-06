import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    position: relative;
    justify-content: space-evenly;
`

export const BackdropWrapper = styled.div`
    position: absolute;
    margin-left: 20px;
    margin-top: 20px;
    align-self: start;
`

export const LogoWrapper = styled.div`
    margin-top: 18px;
`

export const CardsAnimated = styled.div`
    transform: translate(0, 0);
    animation: form-animation 4s;

    }

    @keyframes form-animation {
    0%, 50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const WelcomeAnimation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justiy-content: center;
    position: relative;
    width: 100vw;
    max-width: 360px;
`

export const WelcomeAnimation2 = styled.div`
    transform: translate(0, 0);
    animation: label-animation 4s;
    @keyframes label-animation {
    0%, 50% {
        transform: translate(0, 200%);
    }
    100% {
        transform: translate(0, 0);
    }
    }
`

    export const ButtonGroup = styled.div`
    margin-top: 30px;
`

    export const SingleButton = styled.div`
    margin-top: 20px;
`