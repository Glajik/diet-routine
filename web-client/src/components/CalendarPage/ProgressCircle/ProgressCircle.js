import React from 'react'
import {Progress} from 'antd'
import { getColor } from '../helpers'

const ProgressCircle = (props) => {
  const { value, limit } = props

  const label = `${value} / ${limit}`
  
  const percent = value / limit * 100

  return (
    <Progress
      type="circle"
      strokeColor={getColor(percent)}
      format={() =>
        <span style={{fontSize: 12, color: '#262626'}}>
          {label}
        </span>}
      percent={percent}
      width={88} />
  )
}

export default ProgressCircle
