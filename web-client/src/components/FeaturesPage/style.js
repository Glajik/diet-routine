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
    align-self: flex-start;
    margin-top: 25px;
    margin-left: 25px;
`

export const CardsAnimated = styled.div`
    transform: translate(0, 0);
    animation: form-animation 4s;

    }

    @keyframes form-animation {
    from {
        transform: translate(0, 200%);
    }

    to {
        transform: translate(0, 0);
    }
`

export const WelcomeAnimation = styled.div`
    transform: translate(0, 0);
    animation: label-animation 4s;
    @keyframes label-animation {
    0% {
        transform: translate(0, 200%);
    }
    100% {
        transform: translate(0, 0);
    }
    }
    `