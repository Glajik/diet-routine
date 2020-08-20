// Here we will combine all our reducers

import {combineReducers} from 'redux'
import {formReducer} from './formReducer'
import {loaderReducer} from './loaderReducer'
import {modalReducer} from './modalReducer'

const rootReducer = combineReducers({
  form: formReducer,
  loader: loaderReducer,
  modal: modalReducer
})

export default rootReducer