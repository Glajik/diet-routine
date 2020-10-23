import styled from 'styled-components'

export const FieldsDiv = styled.div`
transform: translate(10%, 0);
animation: form-animation 4s;

}

@keyframes form-animation {
from {
    transform: translate(10%, 200%);
}

to {
    transform: translate(10%, 0);
}
`
export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 304px;
`
