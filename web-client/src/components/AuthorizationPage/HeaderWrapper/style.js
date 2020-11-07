import styled from 'styled-components'
import { colors } from '../../../assets/colors'
import { device } from '../../../assets/device'

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
  margin-bottom: 78px;
  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`
export const HeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 33px;
`
export const HeaderIcon = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 32px;
  padding-left: 20px;
`
export const HeaderOR = styled.span`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};
`
