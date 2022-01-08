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

interface GetProjectsRequestAction {
  type: ActionType.GET_PROJECTS_REQUEST;
}

interface GetProjectsSuccessAction {
  type: ActionType.GET_PROJECTS_SUCCESS;
  payload: Project[];
}

interface GetProjectsErrorAction {
  type: ActionType.GET_PROJECTS_ERROR;
  payload: {};
}

interface UpdateProjectSuccessAction {
  type: ActionType.UPDATE_PROJECT_SUCCESS;
}

interface UpdateProjectErrorAction {
  type: ActionType.UPDATE_PROJECT_ERROR;
}

interface DeleteProjectSuccessAction {
  type: ActionType.DELETE_PROJECT_SUCCESS;
}

interface DeleteProjectErrorAction {
  type: ActionType.DELETE_PROJECT_ERROR;
}

export type Actions =
  | AddProjectRequestAction
  | AddProjectSuccessAction
  | AddProjectErrorAction
  | GetProjectRequestAction
  | GetProjectSuccessAction
  | GetProjectErrorAction
  | GetProjectsRequestAction
  | GetProjectsSuccessAction
  | GetProjectsErrorAction
  | UpdateProjectSuccessAction
  | UpdateProjectErrorAction
  | DeleteProjectSuccessAction
  | DeleteProjectErrorAction;
