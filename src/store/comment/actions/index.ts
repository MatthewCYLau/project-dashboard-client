import { ActionType } from "../action-types";
import { Comment } from "../interface";

interface AddCommentSuccessAction {
  type: ActionType.ADD_COMMENT_SUCCESS;
  payload: {};
}

interface AddCommentErrorAction {
  type: ActionType.ADD_COMMENT_ERROR;
  payload: {};
}

interface GetCommentsByIdSuccessAction {
  type: ActionType.GET_COMMENTS_BY_ID_SUCCESS;
  payload: Comment[];
}

interface GetCommentsByIdErrorAction {
  type: ActionType.GET_COMMENTS_BY_ID_ERROR;
  payload: {};
}

export type Actions =
  | AddCommentSuccessAction
  | AddCommentErrorAction
  | GetCommentsByIdSuccessAction
  | GetCommentsByIdErrorAction;
