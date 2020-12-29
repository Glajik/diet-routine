export const checkValidity = (value, rules) => {
  let isValid = true

  if (rules.required) {
    isValid = value.trim() !== '' && isValid
  }

  if (rules.minLength) {
    isValid = value.trim().length >= rules.minLength && isValid
  }

  if (rules.maxLength) {
    isValid = value.trim().length <= rules.maxLength && isValid
  }

  return isValid
}