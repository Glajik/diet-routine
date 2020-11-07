import React from 'react'
import { Backdrop } from './style'

const backdrop = props => (
  <Backdrop show={props.show} onClick={props.clicked} style={props.style} />
)

export default backdrop
