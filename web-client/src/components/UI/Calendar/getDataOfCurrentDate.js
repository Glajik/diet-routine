export const getDataOfCurrentDate = (dayInfo, selectedDate, emptyDayInfoObject) => {
  const selectedDateData = dayInfo.filter(item => {
    return item.date === selectedDate
  })

  if (selectedDateData.length) {
    console.log('This date has such user\'s data: ', ...selectedDateData)
  } else {
    console.log('This date has no user\'s data: ', emptyDayInfoObject)
  }
}