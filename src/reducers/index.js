import { combineReducers } from "redux"
import logReducer from "./logreducer"

export default combineReducers({
  log: logReducer,
});