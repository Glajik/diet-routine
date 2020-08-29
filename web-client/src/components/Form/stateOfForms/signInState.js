export const signInState = {
  controls: {
    email: {
      id: 1,
      value: '',
      name: 'email',
      folderType: 'input',
      type: 'email',
      label: 'emailLabel',
      placeholder: 'emailPlaceholder',
      errorMessage: '',
      rules: {
        required: true,
        isEmail: true
      }
    },
    password: {
      id: 2,
      value: '',
      name: 'password',
      folderType: 'input',
      type: 'password',
      label: 'passwordLabel',
      placeholder: 'passwordPlaceholder',
      errorMessage: '',
      rules: {
        required: true,
        minLength: 6
      }
    }
  },
  isDisabled: false,
  successMessage: 'signInSuccessMessage',
  errorMessage: 'signInErrorMessage'
}