import styled from 'styled-components'
import { registerImg } from '../../assets'

export const LoginWrapper = styled.div`
  background: url(${registerImg}) no-repeat 50% 50% / cover;
  height: 100vh;
  overflow-y: auto;
  color: #fff;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  max-width: 80%;
  margin: 15px auto 0;
  z-index: 999;

  @media screen and (max-width: 359px) {
    max-width: 90%;
  }
`
export const Logo = styled.img.attrs({
  alt: 'Logo',
})``

export const LoginName = styled.h2`
  font-family: Ubuntu, sans-serif;
  font-weight: 300;
  font-size: 48px;
  width: 100%;
  text-align: center;
  margin: 18px 0 78px;

  @media screen and (max-width: 359px) {
    font-size: 42px;
  }
`

export const Form = styled.form``

export const FieldsWrapper = styled.div`
  margin-bottom: 60px;

  @media screen and (min-width: 350px) {
    margin-bottom: 50px;
  }
`

export const LoaderWrapper = styled.div`
  margin: 0 auto;
`
