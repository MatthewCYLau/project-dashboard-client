import { Actions } from "../actions";
import { ActionType } from "../action-types";
import { User } from "../interface";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  registrationEmail: string;
}

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
  registrationEmail: "",
};

const reducer = (
  state: AuthState = initialState,
  action: Actions
): AuthState => {
  switch (action.type) {
    case ActionType.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case ActionType.REGISTRATION_SUCCESS:
      return {
        ...state,
        registrationEmail: action.payload,
        loading: false,
      };
    case ActionType.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loading: false,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case ActionType.REGISTRATION_FAILED:
    case ActionType.VERIFY_EMAIL_FAILED:
    case ActionType.AUTH_ERROR:
    case ActionType.LOGIN_FAILED:
    case ActionType.LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
