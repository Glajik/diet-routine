export const getDataOfCurrentDate = (
  selectedDate,
  currentUserId,
  serverDates,
  dailyLimits
) => {
  const selectedDateData = []

  serverDates.forEach(item => {
    if (item.author === currentUserId) {
      if (+item.createdAt.seconds.toString().slice(0, 6) === +selectedDate.slice(0, 6)) {
        selectedDateData.push(item)
      }
    }
  })

  if (selectedDateData.length) {
    const usedCalories = selectedDateData.reduce((accumulator, item) => {
      return accumulator + item.calories
    }, 0)

    const usedProteins = selectedDateData.reduce((accumulator, item) => {
      return accumulator + item.proteins
    }, 0)

    const usedFats = selectedDateData.reduce((accumulator, item) => {
      return accumulator + item.fats
    }, 0)

    const usedCarbs = selectedDateData.reduce((accumulator, item) => {
      return accumulator + item.carbohydrates
    }, 0)

    return {
      userId: currentUserId,
      caloriesPerDay: dailyLimits[0].dailyLimits.calories,
      proteinsPerDay: dailyLimits[0].dailyLimits.proteins,
      fatsPerDay: dailyLimits[0].dailyLimits.fats,
      carbsPerDay: dailyLimits[0].dailyLimits.carbohydrates,
      date: +selectedDateData[0].createdAt.seconds.toString().slice(0, 6),
      usedCalories: usedCalories.toFixed(),
      usedProteins: usedProteins.toFixed(),
      usedFats: usedFats.toFixed(),
      usedCarbs: usedCarbs.toFixed(),
      products: selectedDateData
    }
  } else {
    return {
      userId: currentUserId,
      caloriesPerDay: dailyLimits ? dailyLimits[0].dailyLimits.calories : 0,
      proteinsPerDay: dailyLimits ? dailyLimits[0].dailyLimits.proteins : 0,
      fatsPerDay: dailyLimits ? dailyLimits[0].dailyLimits.fats : 0,
      carbsPerDay: dailyLimits ? dailyLimits[0].dailyLimits.carbohydrates : 0,
      date: selectedDate,
      usedCalories: 0,
      usedProteins: 0,
      usedFats: 0,
      usedCarbs: 0,
      products: []
    }
  }
}