import styled from 'styled-components'
import { colors } from '../../../assets/colors'
import img from '../../../assets/images/registration_pencil.svg'

export const HeaderImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoWrapper = styled.img`
  margin-top: 14px;
  margin-bottom: 25px;
`
export const HeaderTitle = styled.div`
  font-family: Ubuntu;
  font-size: 48px;
  font-weight: 300;
  line-height: 55px;
  color: ${colors.white};
  margin-bottom: 12px;
`

export const HeaderAuthor = styled.div`
  position: relative;
  font-family: IBM Plex Sans;
  font-weight: 300;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 30px;
  color: ${colors.white};
  &::before {
    content: '';
    position: absolute;
    width: 13px;
    height: 16px;
    left: -30px;
    top: 5px;
    background: url(${img}) center 0 no-repeat;
  }
`
