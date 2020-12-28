import React from 'react'
import { useHistory } from 'react-router-dom'
import { backArrow, settings } from '../../../assets'
import { FormattedMessage } from 'react-intl'

import {
  BarWrapper,
  ComeBackButton,
  ComeBackImg,
  PageName,
  SettingsButton,
  SettingsImg
} from './style'

const TopBar = ({ title, settingsAction }) => {
  const history = useHistory()

  const clickHandler = () => history.goBack()

  return (
    <BarWrapper>
      <ComeBackButton onClick={clickHandler}>
        <ComeBackImg src={backArrow} />
      </ComeBackButton>
      <PageName>
        {title ? <FormattedMessage id={title} /> : ''}
      </PageName>
      {
        settingsAction ? (
          <SettingsButton onClick={settingsAction}>
            <SettingsImg src={settings} />
          </SettingsButton>
        ) : (
            <div style={{ width: '18px' }} />
          )
      }
    </BarWrapper>
  )
}

export default TopBar