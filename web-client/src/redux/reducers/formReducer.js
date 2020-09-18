import {signInState} from '../../components/Form/stateOfForms/signInState'
import {signUpState} from '../../components/Form/stateOfForms/signUpState'
import {
  FIELD_CHANGED,
  CLEAR_FORM,
  DISABLED,
  NOT_DISABLED,
  INIT_SIGN_UP_FORM,
  INIT_SIGN_IN_FORM
} from '../actionTypes'


export const formReducer = (state, action) => {
  switch (action.type) {
    case INIT_SIGN_UP_FORM:
      state = signUpState
      return state
    case INIT_SIGN_IN_FORM:
      state = signInState
      return state
    case FIELD_CHANGED:
      const controls = {...state.controls}
      const eventTarget = action.payload
      const {name} = eventTarget
      controls[name].value = eventTarget.value
      return {...state, controls}
    case CLEAR_FORM:
      const fields = {...state.controls}
      for (let key in fields) {
        fields[key].value = ''
      }
      return {...state, controls: fields}
    case DISABLED:
      return {...state, isDisabled: true}
    case NOT_DISABLED:
      return {...state, isDisabled: false}
    default:
      return {...state}
  }
}