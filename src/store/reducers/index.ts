import { combineReducers } from "redux";
import authReducer from "./authReducers";
import orderReducer from "./orderReducers";
const reducers = combineReducers({
  authReducer,
  orderReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
