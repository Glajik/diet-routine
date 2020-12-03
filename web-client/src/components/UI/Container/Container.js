import React from 'react'
import {ContainerDiv} from './style'

const Container = (props) => (
  <ContainerDiv>
    {props.children}
  </ContainerDiv>
)

export default Container