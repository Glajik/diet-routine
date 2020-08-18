export const signInState = {
  controls: {
    email: {
      id: 1,
      value: '',
      name: 'email',
      folderType: 'input',
      type: 'email',
      label: 'Email',
      placeholder: 'Your email',
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
      label: 'Password',
      placeholder: 'Your password',
      errorMessage: '',
      rules: {
        required: true,
        minLength: 6
      }
    }
  },
  isDisabled: false
}