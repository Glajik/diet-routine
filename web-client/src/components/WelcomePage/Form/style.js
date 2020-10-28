import styled from 'styled-components'

export const FieldsDiv = styled.div`
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
export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  width: 304px;
`
export const AnimatQuestion = styled.div`
  margin-bottom: 10px;
  color: #666666;
  transform: translate(0, 0);
  animation: label-animation 4s;
  @keyframes label-animation {
    0% {
      transform: translate(0, 300%);
      font-size: 35px;
    }
    100% {
      transform: translate(0, 0);
    }
  }
`
