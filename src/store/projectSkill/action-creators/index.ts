import api from "../../../utils/api";
import { HistoryRouterProps } from "react-router-dom";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Actions } from "../actions";
import { API_BASE_URL } from "../../../constants";
import { ProjectSkill } from "../interface";

export const addProjectSkills = (
  projectSkills: ProjectSkill[],
  projectId: string,
  history: HistoryRouterProps["history"]
) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      await api.put(
        `${API_BASE_URL}/api/projects/${projectId}/project-skills`,
        projectSkills
      );
      dispatch({
        type: ActionType.ADD_PROJECT_SKILL_SUCCESS,
      });
      history.push("/dashboard");
    } catch (err) {
      dispatch({
        type: ActionType.ADD_PROJECT_SKILL_ERROR,
        payload: {},
      });
    }
  };
};
