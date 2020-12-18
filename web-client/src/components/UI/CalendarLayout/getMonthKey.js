export const getMonthKey = (month) => {
  switch (month) {
    case 'December':
      return 'i18n_december_key'
    case 'January':
      return 'i18n_january_key'
    case 'February':
      return 'i18n_february_key'
    case 'March':
      return 'i18n_march_key'
    case 'April':
      return 'i18n_april_key'
    case 'May':
      return 'i18n_may_key'
    case 'June':
      return 'i18n_june_key'
    case 'July':
      return 'i18n_july_key'
    case 'August':
      return 'i18n_august_key'
    case 'September':
      return 'i18n_september_key'
    case 'October':
      return 'i18n_october_key'
    case 'November':
      return 'i18n_november_key'
    default:
      return ''
  }
}