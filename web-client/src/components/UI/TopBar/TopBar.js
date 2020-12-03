import React from 'react'
import {backArrow, settings} from '../../../assets'
import {FormattedMessage} from 'react-intl'

import {
  BarWrapper,
  ComeBackButton,
  ComeBackImg,
  PageName,
  SettingsButton,
  SettingsImg
} from './style'

const TopBar = (props) => {
  const clickHandler = () => {
    if (
      props.history.location.pathname === '/main' ||
      props.history.location.pathname === '/calendar' ||
      props.history.location.pathname === '/profile' ||
      props.history.location.pathname === '/add-product'
    ) {
      props.history.push('/main')
    } else {
      props.history.goBack()
    }
  }

  return (
    <BarWrapper>
      <ComeBackButton onClick={clickHandler}>
        <ComeBackImg src={backArrow}/>
      </ComeBackButton>
      <PageName>
        {props.title ? <FormattedMessage id={props.title}/> : ''}
      </PageName>
      {
        props.settingsAction ? (
          <SettingsButton onClick={props.settingsAction}>
            <SettingsImg src={settings}/>
          </SettingsButton>
        ) : (
         <div style={{width: '18px'}}/>
        )
      }
    </BarWrapper>
  )
}

export default TopBar