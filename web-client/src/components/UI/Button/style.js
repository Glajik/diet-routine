import styled from 'styled-components'
import {colors} from '../../../assets/colors.js'

export const Button = styled.button`
  outline: none;
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  box-sizing: border-box;
  font-size: 18px;
  transition: background .3s ease-in-out;
  ${p =>
  p.action === 'Sign Up' || p.action === 'Sign In' || p.isLoading
    ? `
        width: 91px;
        height: 43px;
        display: block;
        color: ${colors.white}; 
        background: ${p.disabled ? 'grey' : '#009898'};
        border: 1px solid ${p.disabled ? 'grey' : '#009898'};
        border-radius: 7px;
        margin: 0 auto;
        &:hover {
          background: ${p.disabled ? 'grey' : '#007575'}; 
        }`
    : ''
  }
`