import React, {useState} from 'react'
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
  const returnToPreviousPage = () => {
    props.history.goBack()
  }

  return (
    <BarWrapper>
      <ComeBackButton onClick={returnToPreviousPage}>
        <ComeBackImg src={backArrow}/>
      </ComeBackButton>
      <PageName>
        {props.pageName ? <FormattedMessage id={props.pageName}/> : ''}
      </PageName>
      {
        props.pageHasSettings ? (
          <SettingsButton>
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