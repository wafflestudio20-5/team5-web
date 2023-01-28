import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  profile: profileReducer,
});

export default rootReducer;
