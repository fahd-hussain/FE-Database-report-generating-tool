import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// Local Imports
import combineReducers from './Reducers';

export const store = createStore(
  combineReducers,
  applyMiddleware(
    thunk,
    logger
  ),
);