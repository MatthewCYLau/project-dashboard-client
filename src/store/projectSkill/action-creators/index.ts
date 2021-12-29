import api from "../../../utils/api";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Actions } from "../actions";
import { API_BASE_URL } from "../../../constants";
import { ProjectSkill } from "../interface";

export const addProjectSkills = (
  projectSkills: ProjectSkill[],
  projectId: string,
  navigate: NavigateFunction
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
      navigate("/dashboard");
    } catch (err) {
      dispatch({
        type: ActionType.ADD_PROJECT_SKILL_ERROR,
        payload: {},
      });
    }
  };
};
