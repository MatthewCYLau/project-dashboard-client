import { Actions } from "../actions";
import { ActionType } from "../action-types";
import { Project } from "../interface";

interface ProjectState {
  loading: boolean;
  project: Project;
}

const initialState = {
  loading: true,
  project: {
    name: "",
    project_skills: [],
  },
};

const reducer = (
  state: ProjectState = initialState,
  action: Actions
): ProjectState => {
  switch (action.type) {
    case ActionType.GET_PROJECT_REQUEST:
    case ActionType.ADD_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.GET_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project: action.payload,
      };
    case ActionType.GET_PROJECT_ERROR:
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
