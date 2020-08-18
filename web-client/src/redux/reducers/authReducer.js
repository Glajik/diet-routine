import {signInState} from '../../components/Form/stateOfForms/signInState'
import {signUpState} from '../../components/Form/stateOfForms/signUpState'
import {
  FOLDER_CHANGED,
  CLEAR_FORM,
  DISABLED,
  NOT_DISABLED,
  INIT_SIGN_UP_FORM,
  INIT_SIGN_IN_FORM
} from '../actionTypes'

export const authReducer = (state, action) => {
  switch (action.type) {
    case INIT_SIGN_UP_FORM:
      state = signUpState
      return state
    case INIT_SIGN_IN_FORM:
      state = signInState
      return state
    case FOLDER_CHANGED:
      const controls = {...state.controls}
      const event = action.payload
      const {name} = event.target
      controls[name].value = event.target.value
      return {...state, controls}
    case CLEAR_FORM:
      const folders = {...state.controls}
      for (let key in folders) {
        folders[key].value = ''
      }
      return {...state, controls: folders}
    case DISABLED:
      return {...state, isDisabled: true}
    case NOT_DISABLED:
      return {...state, isDisabled: false}
    default:
      return {...state}
  }
}