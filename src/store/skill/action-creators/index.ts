import api from "../../../utils/api";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Actions } from "../actions";
import { API_BASE_URL } from "../../../constants";
import { AddSkillBody, SkillsList } from "../interface";

export const addSkill = (
  addSkillBody: AddSkillBody,
  navigate: NavigateFunction
) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const { name } = addSkillBody;
      await api.post(`${API_BASE_URL}/api/skills`, {
        name,
      });
      dispatch({
        type: ActionType.ADD_SKILL_SUCCESS,
        payload: {},
      });
      navigate("/dashboard");
    } catch (err) {
      dispatch({
        type: ActionType.ADD_SKILL_ERROR,
        payload: {},
      });
    }
  };
};

export const getSkills = () => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const { data } = await api.get<SkillsList>(`${API_BASE_URL}/api/skills`);
      dispatch({
        type: ActionType.GET_SKILLS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_SKILLS_ERROR,
        payload: {},
      });
    }
  };
};
