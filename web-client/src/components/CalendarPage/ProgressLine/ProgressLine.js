import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Progress} from 'antd'
import './antd-cusomise.css'
import { getColor } from '../helpers'
import {
  ProgressLineData,
  ProgressLineDataType,
  ProgressLineDataValue,
  ProgressLineWrapper
} from './style'

const ProgressLine = (props) => {
  const { name, value, limit } = props

  const label = `${value} / ${limit}`
  
  const percent = value / limit * 100

  return (
      <ProgressLineWrapper>
        <Progress
          percent={percent}
          strokeWidth={8}
          strokeColor={getColor(percent)}
          size="small"
          format={() => (
            <ProgressLineData>
              <ProgressLineDataType>
                <FormattedMessage id={name}/>
              </ProgressLineDataType>
              <ProgressLineDataValue>
                {label} <FormattedMessage id="i18n_grams"/>
              </ProgressLineDataValue>
            </ProgressLineData>
          )}/>
      </ProgressLineWrapper>
  )
}

export default ProgressLine
