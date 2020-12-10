import { combineReducers } from "redux"
import logReducer from "./logreducer"
import techReducer from "./techreducer"

export default combineReducers({
  log: logReducer,
  tech: techReducer
});