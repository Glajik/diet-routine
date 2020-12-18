export const getDataOfCurrentDate = (dayInfo, selectedDate, currentUserId) => {
  const selectedDateData = dayInfo.filter(item => {
    return item.userId === currentUserId && item.dates.filter(item => item.date === selectedDate).length
  })

  if (selectedDateData.length) {
    return {
      userId: selectedDateData[0].userId,
      caloriesPerDay: selectedDateData[0].caloriesPerDay,
      proteinsPerDay: selectedDateData[0].proteinsPerDay,
      fatsPerDay: selectedDateData[0].fatsPerDay,
      carbsPerDay: selectedDateData[0].carbsPerDay,
      ...selectedDateData[0].dates.filter(item => item.date === selectedDate)[0]
    }
  } else {
    return {
      userId: currentUserId,
      caloriesPerDay: dayInfo.filter(item => item.userId === currentUserId)[0].caloriesPerDay,
      proteinsPerDay: dayInfo.filter(item => item.userId === currentUserId)[0].proteinsPerDay,
      fatsPerDay: dayInfo.filter(item => item.userId === currentUserId)[0].fatsPerDay,
      carbsPerDay: dayInfo.filter(item => item.userId === currentUserId)[0].carbsPerDay,
      date: selectedDate,
      usedCalories: 0,
      usedProteins: 0,
      usedFats: 0,
      usedCarbs: 0,
      products: []
    }
  }
}