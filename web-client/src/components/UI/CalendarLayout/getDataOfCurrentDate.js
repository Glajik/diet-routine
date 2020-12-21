export const getDataOfCurrentDate = (dayInfo, selectedDate, currentUserId, serverDates) => {
  console.log('Server: ', serverDates)

  const selectedDateData = serverDates.filter(item => {
    return item.author === currentUserId && +item.createdAt.seconds.toString().slice(0, 6) === +selectedDate.slice(0, 6)
  })

  console.log('Selected: ', selectedDateData[0])

  if (selectedDateData.length) {
    return {
      userId: selectedDateData[0].author,
      caloriesPerDay: 1400,
      proteinsPerDay: 75,
      fatsPerDay: 64,
      carbsPerDay: 110,
      date: selectedDateData[0].createdAt.seconds,
      usedCalories: selectedDateData[0].calories,
      usedProteins: selectedDateData[0].proteins,
      usedFats: selectedDateData[0].fats,
      usedCarbs: selectedDateData[0].carbohydrates,
      products: selectedDateData[0].product
      // ...selectedDateData[0].dates.filter(item => item.date === selectedDate)[0]
    }
  } else {
    return {
      userId: currentUserId,
      caloriesPerDay: 1400,
      proteinsPerDay: 75,
      fatsPerDay: 64,
      carbsPerDay: 110,
      date: selectedDate,
      usedCalories: 0,
      usedProteins: 0,
      usedFats: 0,
      usedCarbs: 0,
      products: []
    }
  }
}