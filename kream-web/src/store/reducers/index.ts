import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import sessionReducer from "./sessionReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  profile: profileReducer,
  shop: shopReducer,
});

export default rootReducer;
