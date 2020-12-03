const disableButton = controlItems => {
  let isDisabled = true
  let isFirstElemValid = true
  let isCenterElemValid = true
  let isLastElemValid = false

  const form = []

  for (let control in controlItems) {
    form.push(controlItems[control])
  }

  form.forEach((control, index) => {
    if (index === 0) {
      if (form[index].isValid && form[index + 1].isValid) {
        isFirstElemValid = true
      } else {
        isFirstElemValid = false
      }
    }

    if (index > 0 && index < form.length - 1) {
      if (
        form[index].isValid &&
        form[index - 1].isValid &&
        form[index + 1].isValid
      ) {
        isCenterElemValid = true
      } else {
        isCenterElemValid = false
      }
    }

    if (index === form.length - 1) {
      if (form[index].isValid) {
        isLastElemValid = true
      } else {
        isLastElemValid = false
      }
    }
  })

  isDisabled = !isFirstElemValid || !isCenterElemValid || !isLastElemValid

  return isDisabled
}

export default disableButton

// Закомментировано для исторического момента =)
/* form.forEach((control, index) => {

if (index > 0 && index === form.length - 1 && isDisabled) {
  if (!form[index].isValid && !form[index - 1].isValid) {
    isDisabled = true
  } else {
    isDisabled = false
  }
}
if (index > 0 && index < form.length - 1) {
  if (
    !form[index].isValid &&
    !form[index - 1].isValid &&
    !form[index + 1].isValid &&
    isDisabled
  ) {
    isDisabled = true
  } else {
    isDisabled = false
  }
}
if (index === 0) {
  if (!form[index].isValid && isDisabled) {
    isDisabled = true
  } else {
    isDisabled = false
  }
}
if (index > 0 && index < form.length - 1) {
  if (
    !form[index].isValid &&
    !form[index + 1].isValid &&
    !form[index - 1].isValid
  ) {
    isDisabled = true
  } else {
    isDisabled = false
  }
}
if (index > 0 && index < form.length - 1) {
  console.log('index: ', index - 1)
  if (
    !form[index].isValid &&
    !form[index - 1].isValid &&
    !form[index + 1].isValid
  ) {
    console.log('formIndex: ', form[index - 1])
    isDisabled = true
  } else {
    isDisabled = false
  }
}
if (index === 0) {
  console.log('index', index)
  if (!form[index].isValid && !form[index + 1].isValid) {
    isDisabled = true
  } else {
    isDisabled = false
  }
}
if (index === 0 && index < form.length - 1) {
  console.log(form[index])
  if (form[index].isValid && form[index + 1].isValid) {
    isDisabled = false
  } else {
    isDisabled = true
  }
} else if (index < form.length) {
  console.log('222222222222222222')
  if (form[index].isValid) {
    isDisabled = false
  } else {
    isDisabled = true
  }
}
}) */
