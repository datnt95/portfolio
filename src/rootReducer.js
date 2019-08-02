import { combineReducers } from "redux";
import { sideBarReducer } from "./components/SideBar/side-bar.reducer";
const rootReducer = combineReducers({
  sideBar: sideBarReducer,
});

export default rootReducer;
