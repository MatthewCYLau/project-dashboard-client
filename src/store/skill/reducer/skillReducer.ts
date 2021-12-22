import { Actions } from "../actions";
import { ActionType } from "../action-types";
import { SkillsList } from "../interface";

interface SkillState {
  loading: boolean;
  skills: SkillsList;
}

const initialState = {
  loading: true,
  skills: [],
};

const reducer = (
  state: SkillState = initialState,
  action: Actions
): SkillState => {
  switch (action.type) {
    case ActionType.ADD_SKILL_ERROR:
      return {
        ...state,
        loading: false,
      };
    case ActionType.ADD_SKILL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.GET_SKILLS_SUCCESS:
      return {
        ...state,
        loading: false,
        skills: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
