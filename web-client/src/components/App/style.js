import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  max-width: 854px;
  margin: auto;
  justify-content: center;
  background: #f0f0f0;
  min-height: 100vh;
  .fade-enter {
    transition: transform 1000ms linear;
    transform: translateX(100%);
  }

  .fade-enter.fade-enter-active {
    transform: translateX(0%);
  }

  .fade-exit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    transform: translateX(0%);
  }

  .fade-exit.fade-exit-active {
    transform: translateX(-100%);
    transition: transform 1000ms linear;
  }
`
