import { ActionType } from "../action-types";
import { SkillsList } from "../interface";

interface AddSkillSuccessAction {
  type: ActionType.ADD_SKILL_SUCCESS;
  payload: {};
}

interface AddSkillErrorAction {
  type: ActionType.ADD_SKILL_ERROR;
  payload: {};
}

interface GetSkillsSuccessAction {
  type: ActionType.GET_SKILLS_SUCCESS;
  payload: SkillsList;
}

interface GetSkillsErrorAction {
  type: ActionType.GET_SKILLS_ERROR;
  payload: {};
}

export type Actions =
  | AddSkillSuccessAction
  | AddSkillErrorAction
  | GetSkillsSuccessAction
  | GetSkillsErrorAction;
