import axios from "axios";
import { ActionType } from "../store/auth/action-types";
import store from "../store/store";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: ActionType.LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
