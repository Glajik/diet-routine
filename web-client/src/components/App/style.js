import styled from 'styled-components'

import { ibmFont } from '../../assets/fonts'

export const Wrapper = styled.div`
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


export const AppWrapper = styled.div`
  font-family: ${ibmFont};
`
