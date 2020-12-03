import React from 'react'
import {TopBar} from '../../components/UI'

const TopBarLayout = (props) => {
  return (
    <>
      <TopBar
        title={props.title}
        settingsAction={props.settingsAction}
        history={props.history}/>
      <div>
        {props.children}
      </div>
    </>
  )
}

export default TopBarLayout