import React from 'react'
import {connect} from 'react-redux'
import {Progress} from 'antd'

const ProgressCircle = (props) => {
  let caloriesPerDay = props.selectedDateData[0] ? props.selectedDateData[0].caloriesPerDay : props.selectedDateData.caloriesPerDay
  let caloriesHadBeenEaten = props.selectedDateData[0] ? props.selectedDateData[0].usedCalories : props.selectedDateData.usedCalories
  let caloriesDayPart = +caloriesHadBeenEaten  * 100 / +caloriesPerDay
  let progressColor

  if (+caloriesHadBeenEaten < +caloriesPerDay) {
    progressColor = '#389E0D'
  }

  if (+caloriesHadBeenEaten > +caloriesPerDay && +caloriesHadBeenEaten <= +caloriesPerDay + 200) {
    progressColor = '#ffcc00'
  }

  if (+caloriesHadBeenEaten > +caloriesPerDay + 200) {
    progressColor = '#ff4d4f'
  }

  return (
    <Progress
      type="circle"
      strokeColor={progressColor}
      format={() =>
        <span style={{fontSize: 12, color: '#262626'}}>
          {caloriesHadBeenEaten}/{caloriesPerDay}
        </span>}
      percent={caloriesDayPart}
      width={88} />
  )
}

const mapStateToProps = (state) => {
  return {
    selectedDateData: state.dateData.selectedDateData
  }
}

export default connect(mapStateToProps)(ProgressCircle)