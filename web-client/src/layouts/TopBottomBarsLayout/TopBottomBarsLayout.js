import React from 'react'
import {BottomBar, TopBar} from '../../components/UI'

const TopBottomBarsLayout = (props) => {
  return (
    <>
      <TopBar
        title={props.title}
        settingsAction={props.settingsAction}
        history={props.history}/>
      <div>
        {props.children}
      </div>
      <BottomBar history={props.history}/>
    </>
  )
}

export default TopBottomBarsLayout