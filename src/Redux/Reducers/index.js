import { combineReducers } from 'redux'
import { databaseReducer } from './Database/database.reducer'

export default combineReducers({ database: databaseReducer })