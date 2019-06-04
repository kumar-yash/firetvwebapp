import { combineReducers } from "redux";

import headerReducer from "../components/header/headerReducer";
import videoReducer from "../reducers/videoReducer";

const rootReducer = combineReducers({
  homeState: headerReducer,
  videoState: videoReducer
});

export default rootReducer;
