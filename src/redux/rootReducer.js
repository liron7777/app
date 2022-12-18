import { combineReducers } from "redux";
import { operationsReducer } from "./reducer/operationsReducer";

export const rootReducer = combineReducers({
  operationsReducer,
});
