import React from 'react'
import {BottomBar} from '../../components/UI'

const BottomBarLayout = (props) => (
  <>
    <BottomBar history={props.history}>
      {props.children}
    </BottomBar>
    <div>
      {props.children}
    </div>
  </>
)

export default BottomBarLayout