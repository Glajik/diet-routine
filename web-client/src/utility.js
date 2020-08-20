import axios from 'axios'

export const disableButton = (isDisabled, form) => {
  form.forEach((folder, index) => {
    if (index !== 0) {
      if (folder.value.trim() === '' || form[index - 1].value.trim() === '') {
        isDisabled = true
      }
    } else {
      if (folder.value.trim() === '') {
        isDisabled = true
      }
    }
  })

  return isDisabled
}

export const auth = async (event, folders, url) => {
  event.preventDefault()
  const formData = {}
  for (let key in folders) {
    formData[key] = folders[key].value
  }

  const response = await axios.post(url, formData)
  if (response.data.idToken) {
    document.cookie = `token=${response.data.idToken}`
    console.log(response.data.idToken)
  }
  console.log('Response: ', response)
  console.log(formData)
  return response
}