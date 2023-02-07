import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import sessionReducer from "./sessionReducer";
import shopfilterReducer from "./shopfilterReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  profile: profileReducer,
  shopfilter: shopfilterReducer,
});

export default rootReducer;
