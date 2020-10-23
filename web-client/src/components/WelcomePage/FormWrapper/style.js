import styled from 'styled-components'

export const FormDiv = styled.div`
  background-color: white;
  min-height: 47vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NameQuestion = styled.p`
display: inline-block;
font-family: Ubuntu;
font-style: normal;
font-weight: 300;
font-size: 42px;
line-height: 48px;
color: #666666;
transform: scale(0.45) translate(-140px, -400px);
animation: pulse 4s;


@keyframes pulse {
from {
    color: #000000;
    transform: scale(.85) translate(0, 0);
}

to {
    color: #666666;
    transform: scale(.45) translate(-140px, -400px);
}
}
`
