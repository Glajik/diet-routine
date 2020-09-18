export const signUpState = {
  controls: {
    name: {
      id: 1,
      value: '',
      name: 'name',
      folderType: 'input',
      type: 'text',
      label: 'nameLabel',
      placeholder: 'namePlaceholder',
      errorMessage: '',
      rules: {
        required: true,
        minLength: 2,
        maxLength: 60
      }
    },
    age: {
      id: 2,
      value: '',
      name: 'age',
      folderType: 'input',
      type: 'number',
      label: 'ageLabel',
      placeholder: 'agePlaceholder',
      errorMessage: '',
      rules: {
        required: true
      }
    },
    email: {
      id: 3,
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
      id: 4,
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
  successMessage: 'signUpSuccessMessage',
  errorMessage: 'signUpErrorMessage'
}