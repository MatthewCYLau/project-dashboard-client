import { Actions } from "../actions";
import { ActionType } from "../action-types";
import { Project } from "../interface";

interface ProjectState {
  loading: boolean;
  project: Project;
  projects: Project[];
}

const initialState = {
  loading: true,
  project: {
    name: "",
    project_skills: [],
    _id: "",
  },
  projects: [],
};

const reducer = (
  state: ProjectState = initialState,
  action: Actions
): ProjectState => {
  switch (action.type) {
    case ActionType.GET_PROJECT_REQUEST:
    case ActionType.ADD_PROJECT_REQUEST:
    case ActionType.GET_PROJECTS_REQUEST:
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
    case ActionType.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
      };
    case ActionType.GET_PROJECT_ERROR:
    case ActionType.ADD_PROJECT_ERROR:
    case ActionType.GET_PROJECTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
