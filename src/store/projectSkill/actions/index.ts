import { ActionType } from "../action-types";
import { ProjectSkill } from "../interface";

interface AddProjectSkillSuccessAction {
  type: ActionType.ADD_PROJECT_SKILL_SUCCESS;
}

interface AddProjectSkillErrorAction {
  type: ActionType.ADD_PROJECT_SKILL_ERROR;
  payload: {};
}

export type Actions = AddProjectSkillSuccessAction | AddProjectSkillErrorAction;
