import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Progress} from 'antd'
import {connect} from 'react-redux'
import './antd-cusomise.css'
import {
  ProgressLineData,
  ProgressLineDataType,
  ProgressLineDataValue,
  ProgressLinesWrapper,
  ProgressLineWrapper
} from './style'

const ProgressLine = (props) => {
  let usedProteins = props.selectedDateData.usedProteins * 100 / props.selectedDateData.proteinsPerDay
  let usedFats = props.selectedDateData.usedFats * 100 / props.selectedDateData.fatsPerDay
  let usedCarbs = props.selectedDateData.usedCarbs * 100 / props.selectedDateData.carbsPerDay

  let colorOfFatsProgressLine

  if (+props.selectedDateData.usedFats <= +props.selectedDateData.fatsPerDay) {
    colorOfFatsProgressLine = '#389E0D'
  }

  if (+props.selectedDateData.usedFats > +props.selectedDateData.fatsPerDay && +props.selectedDateData.usedFats <= +props.selectedDateData.fatsPerDay + 10) {
    colorOfFatsProgressLine = '#ffcc00'
  }

  if (+props.selectedDateData.usedFats > +props.selectedDateData.fatsPerDay + 10) {
    colorOfFatsProgressLine = '#ff4d4f'
  }

  let colorOfCarbsProgressLine

  if (+props.selectedDateData.usedCarbs <= +props.selectedDateData.carbsPerDay) {
    colorOfCarbsProgressLine = '#389E0D'
  }

  if (+props.selectedDateData.usedCarbs > +props.selectedDateData.carbsPerDay && +props.selectedDateData.usedCarbs <= +props.selectedDateData.carbsPerDay + 15) {
    colorOfCarbsProgressLine = '#ffcc00'
  }

  if (+props.selectedDateData.usedCarbs > +props.selectedDateData.carbsPerDay + 15) {
    colorOfCarbsProgressLine = '#ff4d4f'
  }

  return (
    <ProgressLinesWrapper>
      <ProgressLineWrapper>
        <Progress
          percent={usedProteins}
          strokeWidth={8}
          strokeColor="#389E0D"
          size="small"
          format={() => (
            <ProgressLineData>
              <ProgressLineDataType>
                <FormattedMessage id="i18n_proteins"/>
              </ProgressLineDataType>
              <ProgressLineDataValue>
                {props.selectedDateData.usedProteins}/{props.selectedDateData.proteinsPerDay} <FormattedMessage id="i18n_grams"/>
              </ProgressLineDataValue>
            </ProgressLineData>
          )}/>
      </ProgressLineWrapper>
      <ProgressLineWrapper>
        <Progress
          percent={usedFats}
          strokeWidth={8}
          strokeColor={colorOfFatsProgressLine}
          size="small"
          format={() => (
            <ProgressLineData>
              <ProgressLineDataType>
                <FormattedMessage id="i18n_fats"/>
              </ProgressLineDataType>
              <ProgressLineDataValue>
                {props.selectedDateData.usedFats}/{props.selectedDateData.fatsPerDay} <FormattedMessage id="i18n_grams"/>
              </ProgressLineDataValue>
            </ProgressLineData>
          )}/>
      </ProgressLineWrapper>
      <ProgressLineWrapper lastLine>
        <Progress
          percent={usedCarbs}
          strokeWidth={8}
          strokeColor={colorOfCarbsProgressLine}
          size="small"
          format={() => (
            <ProgressLineData>
              <ProgressLineDataType>
                <FormattedMessage id="i18n_carbs"/>
              </ProgressLineDataType>
              <ProgressLineDataValue>
                {props.selectedDateData.usedCarbs}/{props.selectedDateData.carbsPerDay} <FormattedMessage id="i18n_grams"/>
              </ProgressLineDataValue>
            </ProgressLineData>
          )}/>
      </ProgressLineWrapper>
    </ProgressLinesWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedDateData: state.dateData.selectedDateData
  }
}

export default connect(mapStateToProps)(ProgressLine)