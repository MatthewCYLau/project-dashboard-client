import { ActionType } from "../action-types";

interface AddProjectSuccessAction {
  type: ActionType.ADD_PROJECT_SUCCESS;
  payload: {};
}

interface AddProjectErrorAction {
  type: ActionType.ADD_PROJECT_ERROR;
  payload: {};
}

export type Actions = AddProjectSuccessAction | AddProjectErrorAction;
