import styled from 'styled-components'
import {colors} from '../../../assets/colors'

const btnTypeStyles = p => {
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

const positionStyles = p => {
  switch (p.position) {
    case 'authLayout':
      return `
        position: absolute;
        bottom: 30px; 
      `
    default:
      return ``
  }
}

export const Button = styled.button`
  display: block;
  width: 100%;
  border-radius: 50px;
  font-weight: 700;
  letter-spacing: .1em;
  padding: 15px 0;
  outline: none;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  box-sizing: border-box;
  font-size: 18px;
  transition: background .3s ease-in-out;
  text-transform: uppercase;
  ${positionStyles};
  ${btnTypeStyles};
}
`

export const Icon = styled.i`
  color: ${p => p.iconColor};
  ${p =>
  p.leftIcon ? 'margin-right: 10px' : p.rightIcon ? 'margin-left: 10px' : ''};
`
