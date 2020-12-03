const createErrorMessage = (controlItems, setControls) => {
  if (controlItems.email.value.trim() === '') {
    controlItems.email.errorMessage = 'errorMessageEmailRequired'
  } else if (controlItems.email.value.trim() !== '') {
    controlItems.email.errorMessage = 'errorMessageEmail'
  }

  setControls(controlItems)

  if (controlItems.password.value.trim() === '') {
    controlItems.password.errorMessage = 'errorMessagePasswordRequired'
  } else if (controlItems.password.value.trim().length < 6) {
    controlItems.password.errorMessage = 'errorMessagePasswordSmall'
  } else if (controlItems.password.value.trim().length > 60) {
    controlItems.password.errorMessage = 'errorMessagePasswordLong'
  }

  setControls(controlItems)

  if (controlItems.repeatPassword) {
    if (controlItems.repeatPassword.value.trim() === '') {
      controlItems.repeatPassword.errorMessage = 'repeatErrorMessageRequired'
    } else {
      controlItems.repeatPassword.errorMessage = 'repeatErrorMessageWrong'
    }
  }

  setControls(controlItems)
}

export default createErrorMessage
