import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Actions } from "../actions";
import { API_BASE_URL } from "../../../constants";
import { ProjectSkill } from "../interface";

export const updateProjectSkill = (
  projectSkills: ProjectSkill[],
  projectId: string
) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      await axios.post(
        `${API_BASE_URL}/api/projects/${projectId}/project-skills`,
        {
          projectSkills,
        }
      );
      dispatch({
        type: ActionType.ADD_PROJECT_SKILL_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: ActionType.ADD_PROJECT_SKILL_ERROR,
        payload: {},
      });
    }
  };
};
