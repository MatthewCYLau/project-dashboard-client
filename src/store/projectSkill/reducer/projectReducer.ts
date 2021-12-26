import { Actions } from "../actions";
import { ActionType } from "../action-types";

interface ProjectSkillState {
  loading: boolean;
}

const initialState = {
  loading: true,
};

const reducer = (
  state: ProjectSkillState = initialState,
  action: Actions
): ProjectSkillState => {
  switch (action.type) {
    case ActionType.ADD_PROJECT_SKILL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.ADD_PROJECT_SKILL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
