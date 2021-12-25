import { Actions } from "../actions";
import { ActionType } from "../action-types";
import { ProjectSkill } from "../interface";

interface ProjectSkillState {
  loading: boolean;
  projectSkills: ProjectSkill[];
}

const initialState = {
  loading: true,
  projectSkills: [],
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
