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
      caloriesPerDay: dailyLimits.calories ? dailyLimits.calories : 2000,
      proteinsPerDay: dailyLimits.proteins ? dailyLimits.proteins : 150,
      fatsPerDay: dailyLimits.fats ? dailyLimits.fats : 67,
      carbsPerDay: dailyLimits.carbohydrates ? dailyLimits.carbohydrates : 200,
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
      caloriesPerDay: dailyLimits.calories ? dailyLimits.calories : 2000,
      proteinsPerDay: dailyLimits.proteins ? dailyLimits.proteins : 150,
      fatsPerDay: dailyLimits.fats ? dailyLimits.fats : 67,
      carbsPerDay: dailyLimits.carbohydrates ? dailyLimits.carbohydrates : 200,
      date: selectedDate,
      usedCalories: 0,
      usedProteins: 0,
      usedFats: 0,
      usedCarbs: 0,
      products: []
    }
  }
}