import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 20%;
  left: 20%;
  right: 20%;
  z-index: 200;
  background: #ffffff;
  width: 60%;
  padding: 20px;
  border-radius: 10px;
  transform: ${p => p.show ? 'translateY(0)' : 'translateY(-100vh)'};
  transition: all .6s ease-out;
  
  @media (max-width: 650px) {
   width: 80%;
   left: 10%;
   right: 10%;
  }
`

export const Header = styled.h2`
  font-size: 31px;
  text-align: center;
  color: #a52a2a;
`