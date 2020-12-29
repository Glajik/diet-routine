export const disableButton = (controls) => {
  const form = []
  Object.values(controls).forEach(value => form.push(value))

  let isButtonDisabled = true
  let isDisabledTheCenter = true
  let isDisabledTheStart = true
  let isDisabledTheEnd = true

  form.forEach((item, index) => {
    if (form[index + 1] && form[index - 1]) {
      if (form[index].isValid && form[index + 1].isValid && form[index - 1].isValid) {
        isDisabledTheCenter = false
      } else {
        isDisabledTheCenter = true
      }
    }

    if (!form[index - 1]) {
      if (form[index].isValid && form[index + 1].isValid) {
        isDisabledTheStart = false
      } else {
        isDisabledTheStart = true
      }
    }

    if (!form[index + 1]) {
      if (form[index].isValid && form[index - 1].isValid) {
        isDisabledTheEnd = false
      } else {
        isDisabledTheEnd = true
      }
    }
  })

  isButtonDisabled = isDisabledTheStart || isDisabledTheCenter || isDisabledTheEnd

  return isButtonDisabled
}