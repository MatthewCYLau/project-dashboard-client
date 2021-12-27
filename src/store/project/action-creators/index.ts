import api from "../../../utils/api";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Actions } from "../actions";
import { API_BASE_URL } from "../../../constants";
import { Project, AddProjectRequest, AddProjectResponse } from "../interface";

export const addProject = (
  project: AddProjectRequest,
  history: RouteComponentProps["history"]
) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.ADD_PROJECT_REQUEST,
    });
    try {
      const { name } = project;
      const { data } = await api.post<AddProjectResponse>(
        `${API_BASE_URL}/api/projects`,
        {
          name,
        }
      );
      dispatch({
        type: ActionType.ADD_PROJECT_SUCCESS,
      });
      history.push(`/projects/${data.project_id}/project-skills`);
    } catch (err) {
      dispatch({
        type: ActionType.ADD_PROJECT_ERROR,
        payload: {},
      });
    }
  };
};

export const getProjectById = (id: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.GET_PROJECT_REQUEST,
    });
    try {
      const { data } = await api.get<Project>(
        `${API_BASE_URL}/api/projects/${id}`
      );
      dispatch({
        type: ActionType.GET_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_PROJECT_ERROR,
        payload: {},
      });
    }
  };
};

export const getProjecs = () => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.GET_PROJECTS_REQUEST,
    });
    try {
      const { data } = await api.get<Project[]>(`${API_BASE_URL}/api/projects`);
      dispatch({
        type: ActionType.GET_PROJECTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_PROJECTS_ERROR,
        payload: {},
      });
    }
  };
};
