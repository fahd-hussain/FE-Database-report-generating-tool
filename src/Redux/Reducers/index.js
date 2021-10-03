import { combineReducers } from 'redux'
import { tokenReducer } from './Token/token.reducer'

export default combineReducers({ token: tokenReducer})