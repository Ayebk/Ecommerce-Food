import { ActionTypes } from "../contants/action-types";

const initialState = {
  username: localStorage.getItem("username"),
  email: localStorage.getItem("email"),
  accessToken: localStorage.getItem("token"),
  isLoading: false,
  id: localStorage.getItem("id"),
  isProccessingLogout: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        accessToken: localStorage.getItem("token"),
        isLoading: false,
        id: localStorage.getItem("id"),
      };
    case ActionTypes.AUTH_ERROR:
    case ActionTypes.LOGIN_FAIL:
    case ActionTypes.LOGOUT_SUCCESS:
    case ActionTypes.REGISTER_FAIL:
      localStorage.clear();
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.LOGOUT_PROCESS:
      return {
        ...state,
        isProccessingLogout: true,
      };
    case ActionTypes.LOGOUT_RESET:
      return {
        isProccessingLogout: true,
      };
    case ActionTypes.LOGOUT_PROCESS_RESET:
      return {
        ...state,
        isProccessingLogout: false,
      };
    case ActionTypes.LOGIN_DEMO_ADMIN:
      return {
        username: "Demo",
        isProccessingLogout: false,
      };
    default:
      return state;
  }
};
