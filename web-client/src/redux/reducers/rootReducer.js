// Here we will combine all our reducers

import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {loaderReducer} from './loaderReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer
})

export default rootReducer