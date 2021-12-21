import { Actions } from "../actions";
import { ActionType } from "../action-types";

interface SkillState {
  loading: boolean;
}

const initialState = {
  loading: true,
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
    default:
      return state;
  }
};

export default reducer;
