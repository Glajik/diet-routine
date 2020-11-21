import styled from 'styled-components'
import { registerImg } from '../../assets'

export const RegisterWrapper = styled.div`
  background: url(${registerImg}) no-repeat 50% 50% / cover;
  height: 100vh;
  overflow-y: auto;
  color: #fff;
`

export const FormWrapper = styled.div`
  max-width: 360px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  margin: 15px auto 10px;
  z-index: 999;

  @media screen and (max-width: 359px) {
    max-width: 90%;
  }
`
export const Logo = styled.img.attrs({
  alt: 'Logo',
})``

export const RegisterName = styled.h2`
  font-family: Ubuntu, sans-serif;
  font-weight: 300;
  font-size: 48px;
  width: 100%;
  text-align: center;
  margin: 18px 0 4px;

  @media screen and (max-width: 359px) {
    font-size: 42px;
  }
`

export const Form = styled.form`
  height: calc(100vh - 200px);
`

export const FieldsWrapper = styled.div`
  height: calc(100% - 125px);  
  overflow-y: auto; 

  &::-webkit-scrollbar { 
    display: none;
  }

  &::-webkit-scrollbar-thumb { 
    display: none;
  }
`

export const LoaderWrapper = styled.div`
  margin: 0 auto;
`
export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const Icon = styled.img``

export const UserName = styled.h3`
  font-size: 24px;
  font-weight: 300;
  margin-left: 10px;
`

export const PencilButton = styled.button`
  background: none;
  border: none;
`
