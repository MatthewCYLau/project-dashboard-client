import { TodosList } from "../interface";
import { ActionType } from "../action-types";

interface GetTodosSuccessAction {
  type: ActionType.GET_TODOS_SUCCESS;
  payload: TodosList;
}

interface GetTodosErrorAction {
  type: ActionType.GET_TODOS_ERROR;
  payload: {};
}

interface AddSkillSuccessAction {
  type: ActionType.CREATE_TODO_SUCCESS;
  payload: {};
}

interface AddSkillErrorAction {
  type: ActionType.CREATE_TODO_ERROR;
  payload: {};
}

interface DeleteTodoSuccessAction {
  type: ActionType.DELETE_TODO_SUCCESS;
  payload: {};
}

interface DeleteTodoErrorAction {
  type: ActionType.DELETE_TODO_ERROR;
  payload: {};
}

export type Actions =
  | GetTodosSuccessAction
  | GetTodosErrorAction
  | AddSkillSuccessAction
  | AddSkillErrorAction
  | DeleteTodoSuccessAction
  | DeleteTodoErrorAction;
