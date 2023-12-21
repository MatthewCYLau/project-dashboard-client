import api from "../../../utils/api";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Actions } from "../actions";
import { API_BASE_URL } from "../../../constants";
import { AddCommentBody, Comment } from "../interface";

export const addComment = (addCommentBody: AddCommentBody) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const { body, project_id } = addCommentBody;
      await api.post(
        `${API_BASE_URL}/api/comments`,
        {
          body,
          project_id,
        }
      );
      dispatch({
        type: ActionType.ADD_COMMENT_SUCCESS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: ActionType.ADD_COMMENT_ERROR,
        payload: {},
      });
    }
  };
};

export const getCommentsByProjectId = (projectId: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const { data } = await api.get<Comment[]>(
        `${API_BASE_URL}/api/comments?project_id=${projectId}`
      );
      dispatch({
        type: ActionType.GET_COMMENTS_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_COMMENTS_BY_ID_ERROR,
        payload: {},
      });
    }
  };
};
