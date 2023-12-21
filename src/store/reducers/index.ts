import { combineReducers } from "redux";
import authReducer from "../auth/reducer/authReducer";
import commentReducer from "../comment/reducer/commentReducer";
import alertReducer from "../alert/reducer/alertReducer";
import skillReducer from "../skill/reducer/skillReducer";
import projectReducer from "../project/reducer/projectReducer";

const reducers = combineReducers({
  authState: authReducer,
  commentState: commentReducer,
  alertState: alertReducer,
  skillState: skillReducer,
  projectState: projectReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
