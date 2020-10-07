import styled from 'styled-components'
import {colors} from '../../../assets/colors'

const conditionalStyles = p => {
  switch (p.btnType) {
    case 'primary':
      return `
        color: ${colors.white};
        background: ${p.disabled ? 'grey' : colors.primary};
        border: 1px solid ${p.disabled ? 'grey' : colors.primary}; 
          border: 1px solid ${p.disabled ? 'grey' : colors.primary}; 
        border: 1px solid ${p.disabled ? 'grey' : colors.primary}; 
        margin: 0 auto;
        &:hover {
          background: ${p.disabled ? 'grey' : colors.primaryOnHover};
        }
      `
    case 'secondary':
      return `
        color: ${p.disabled ? 'grey' : colors.secondary};
        background: none;
        margin: 0 auto;
        border: 2px solid ${p.disabled ? 'grey' : colors.secondary};
      `
    default:
      return ''
  }
}


export const Button = styled.button`
  display: block;
  width: 304px;
  padding: 15px 0;
  outline: none;
  border-radius: 50px;
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  box-sizing: border-box;
  font-size: 18px;
  transition: background .3s ease-in-out;
  ${conditionalStyles}
}
`