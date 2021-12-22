import { ActionType } from "../action-types";
import { Project } from "../interface";

interface AddProjectRequestAction {
  type: ActionType.ADD_PROJECT_REQUEST;
}

interface AddProjectSuccessAction {
  type: ActionType.ADD_PROJECT_SUCCESS;
}

interface AddProjectErrorAction {
  type: ActionType.ADD_PROJECT_ERROR;
  payload: {};
}

interface GetProjectRequestAction {
  type: ActionType.GET_PROJECT_REQUEST;
}

interface GetProjectSuccessAction {
  type: ActionType.GET_PROJECT_SUCCESS;
  payload: Project;
}

interface GetProjectErrorAction {
  type: ActionType.GET_PROJECT_ERROR;
  payload: {};
}

export type Actions =
  | AddProjectRequestAction
  | AddProjectSuccessAction
  | AddProjectErrorAction
  | GetProjectRequestAction
  | GetProjectSuccessAction
  | GetProjectErrorAction;
