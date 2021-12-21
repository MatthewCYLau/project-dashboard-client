import { Actions } from "../actions";
import { ActionType } from "../action-types";

interface ProjectState {
  loading: boolean;
}

const initialState = {
  loading: true,
};

const reducer = (
  state: ProjectState = initialState,
  action: Actions
): ProjectState => {
  switch (action.type) {
    case ActionType.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.ADD_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
