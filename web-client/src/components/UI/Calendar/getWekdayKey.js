export const getWeekdayKey = (day) => {
  switch (day) {
    case 'Mo':
      return 'i18n_monday_key'
    case 'Tu':
      return 'i18n_tuesday_key'
    case 'We':
      return 'i18n_wednesday_key'
    case 'Th':
      return 'i18n_thursday_key'
    case 'Fr':
      return 'i18n_friday_key'
    case 'Sa':
      return 'i18n_saturday_key'
    case 'Su':
      return 'i18n_sunday_key'
  }
}