import { combineReducers } from 'redux'
import { databaseReducer } from './Database/database.reducer'
import { relationReducer } from './Relation/relation.redux'
import { tableReducer } from './Table/table.reducer'

export default combineReducers({
  database: databaseReducer,
  table: tableReducer,
  relation: relationReducer
})