import styled from 'styled-components'
import {colors} from '../../../assets/colors'

export const BarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0; 
  max-width: 854px;
  margin: 0 auto;
  width: 100%; 
  height: 40px; 
  background: #ffffff;
  box-shadow: 0px -1px 4px rgba(217, 217, 217, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.15);
`

export const IconsWrapper = styled.div`
  width: 80%;
  height: 100%;
  max-width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const IconButton = styled.button`
  height: 100%;
  display: flex;
  background: none;
  border: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 18px;
  cursor: pointer;
`

export const ActiveDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colors.green};
  position: absolute;
  bottom: -4px;
`

export const AddProductButton = styled.button`
  width: 48px;
  height: 48px;
  background: ${colors.green};
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 8px;
  bottom: 20px;
`