import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Actions } from "../actions";
import { API_BASE_URL } from "../../../constants";
import { AddSkillBody } from "../interface";

export const addSkill = (addSkillBody: AddSkillBody) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const { name } = addSkillBody;
      await axios.post(`${API_BASE_URL}/api/skills`, {
        name,
      });
      dispatch({
        type: ActionType.ADD_SKILL_SUCCESS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: ActionType.ADD_SKILL_ERROR,
        payload: {},
      });
    }
  };
};
