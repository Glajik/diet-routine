const disableButton = controlItems => {
  let isDisabled = true
  const form = []
  for (let control in controlItems) {
    form.push(controlItems[control])
  }
  form.forEach((control, index) => {
    if (index !== 0) {
      if (form[index].isValid && form[index - 1].isValid) {
        isDisabled = false
      } else {
        isDisabled = true
      }
    } else if (index < form.length) {
      if (form[index].isValid && form[index + 1].isValid) {
        isDisabled = false
      } else {
        isDisabled = true
      }
    }
  })
  return isDisabled
}

export default disableButton
