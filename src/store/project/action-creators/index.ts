import axios from "axios";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Actions } from "../actions";
import { API_BASE_URL } from "../../../constants";
import { AddProjectBody } from "../interface";

export const addProject = (
  addProjectBody: AddProjectBody,
  history: RouteComponentProps["history"]
) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const { name } = addProjectBody;
      await axios.post(`${API_BASE_URL}/api/projects`, {
        name,
      });
      dispatch({
        type: ActionType.ADD_PROJECT_SUCCESS,
        payload: {},
      });
      history.push("/dashboard");
    } catch (err) {
      dispatch({
        type: ActionType.ADD_PROJECT_ERROR,
        payload: {},
      });
    }
  };
};
