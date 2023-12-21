import { AxiosResponse } from "axios";
import { NavigateFunction } from "react-router-dom";
import api from "../../../utils/api";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Actions } from "../actions";
import {
  AuthBody,
  RegistrationBody,
  User,
  Token,
  VerifyEmailBody,
  TriggerVerificationBody,
} from "../interface";
import { API_BASE_URL } from "../../../constants";
import { setAlert } from "../../alert/action-creators";

interface Error {
  message: string;
}

export const login = ({ email = "", password = "" }: AuthBody) => {
  return async (dispatch: Dispatch<Actions> | any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    try {
      const { data }: AxiosResponse<Token> = await api.post(
        `${API_BASE_URL}/api/auth`,
        body,
        config
      );
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
      });
      dispatch(loadUser());
    } catch (err) {
      dispatch({
        type: ActionType.LOGIN_FAILED,
      });
      const errors: Error[] = err.response.data.errors;
      errors.forEach((error) => dispatch(setAlert(error.message)));
    }
  };
};

export const register = (
  registrationBody: RegistrationBody,
  navigate: NavigateFunction
) => {
  return async (dispatch: Dispatch<Actions> | any) => {
    try {
      const { name, email, password } = registrationBody;
      await api.post(`${API_BASE_URL}/api/users`, {
        name,
        email,
        password,
      });
      dispatch({
        type: ActionType.REGISTRATION_SUCCESS,
        payload: email,
      });
      navigate("/verify-email");
    } catch (err) {
      dispatch({
        type: ActionType.REGISTRATION_FAILED,
      });
      const errors: Error[] = err.response.data.errors;
      errors.forEach((error) => dispatch(setAlert(error.message)));
    }
  };
};

export const verifyEmail = (verifyEmailBody: VerifyEmailBody) => {
  return async (dispatch: Dispatch<Actions> | any) => {
    try {
      const { email, code } = verifyEmailBody;
      const { data }: AxiosResponse<any> = await api.post(
        `${API_BASE_URL}/api/verify-email`,
        {
          email,
          code,
        }
      );
      dispatch({
        type: ActionType.VERIFY_EMAIL_SUCCESS,
        payload: {
          token: data.token,
        },
      });
      dispatch(loadUser());
    } catch (err) {
      dispatch({
        type: ActionType.VERIFY_EMAIL_FAILED,
      });
      const errors: Error[] = err.response.data.errors;
      errors.forEach((error) => dispatch(setAlert(error.message)));
    }
  };
};

export const triggerVerificationEmail = (registrationEmail: string) => {
  return async (dispatch: Dispatch<Actions> | any) => {
    const payload: TriggerVerificationBody = {
      email: registrationEmail,
    };
    try {
      await api.post(`${API_BASE_URL}/api/trigger-verification`, payload);
      dispatch({
        type: ActionType.TRIGGER_VERIFICATION_SUCCESS,
      });
      dispatch(setAlert("Email verification code resent", "info"));
    } catch (err) {
      dispatch({
        type: ActionType.TRIGGER_VERIFICATION_FAILED,
      });
      const errors: Error[] = err.response.data.errors;
      errors.forEach((error) => dispatch(setAlert(error.message)));
    }
  };
};

export const loadUser = () => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const { data }: AxiosResponse<User> = await api.get(
        `${API_BASE_URL}/api/auth`
      );
      dispatch({
        type: ActionType.USER_LOADED,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.AUTH_ERROR,
      });
    }
  };
};

export const logout = () => (dispatch: Dispatch<Actions>) => {
  dispatch({ type: ActionType.LOGOUT });
};
