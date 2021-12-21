import { combineReducers } from "redux";
import authReducer from "../auth/reducer/authReducer";
import todoReducer from "../todo/reducer/todoReducer";
import alertReducer from "../alert/reducer/alertReducer";
import skillReducer from "../skill/reducer/skillReducer";

const reducers = combineReducers({
  authState: authReducer,
  todoState: todoReducer,
  alertState: alertReducer,
  skillState: skillReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
