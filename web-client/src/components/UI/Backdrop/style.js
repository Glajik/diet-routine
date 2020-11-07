import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: ${p => (p.show ? '0' : '100vh')};
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;
`
