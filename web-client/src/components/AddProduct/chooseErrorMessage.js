export const chooseErrorMessage = (controls) => {
  if (controls.productName.value.trim().length < 2 && controls.productName.value.trim().length > 0) {
    return 'Product name is to small'
  }

  if (controls.productName.value.trim().length > 60) {
    return 'Product name is too long'
  }

  if (controls.productName.value.trim() === '') {
    return 'Enter the field'
  }

  return 'Error'
}