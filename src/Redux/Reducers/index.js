import { combineReducers } from 'redux'
import { databaseReducer } from './Database/database.reducer'
import { tableReducer } from './Table/table.reducer'

export default combineReducers({ database: databaseReducer, table: tableReducer })