import styled from 'styled-components'

export const FormDiv = styled.div`
  background-color: white;
  min-height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translate(0, -390px);
  animation: form-animation 4s;

  @keyframes form-animation {
    from {
      transform: translate(0, 0);
    }

    to {
      transform: translate(0, -390px);
    }
  }
`
