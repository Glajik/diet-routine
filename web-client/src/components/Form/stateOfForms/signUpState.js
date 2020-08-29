export const signUpState = {
  controls: {
    name: {
      id: 1,
      value: '',
      name: 'name',
      folderType: 'input',
      type: 'text',
      label: 'Name',
      placeholder: 'Your name',
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
      label: 'Age',
      placeholder: 'Your age',
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
      label: 'Email',
      placeholder: 'Your email',
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
      label: 'Password',
      placeholder: 'Your password',
      errorMessage: '',
      rules: {
        required: true,
        minLength: 6
      }
    }
  },
  isDisabled: false,
  successMessage: 'You have passed your registration successfully',
  errorMessage: 'We have such user already'
}