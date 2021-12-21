import { ActionType } from "../action-types";

interface AddSkillSuccessAction {
  type: ActionType.ADD_SKILL_SUCCESS;
  payload: {};
}

interface AddSkillErrorAction {
  type: ActionType.ADD_SKILL_ERROR;
  payload: {};
}

export type Actions = AddSkillSuccessAction | AddSkillErrorAction;
