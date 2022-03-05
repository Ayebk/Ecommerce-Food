import { ActionTypes } from "../contants/action-types";

const initialState = {
  isLoading: false,
  users: [],
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOADING_USERS:
      return {
        ...state,
        users: [],
        isLoading: true,
        error: null,
        seccuss: null,
      };
    case ActionTypes.LOADING_SUCCESS_USERS:
      return {
        ...state,
        users: payload,
        isLoading: false,
        error: null,
        seccuss: null,
      };

    case ActionTypes.LOADING_FAIL_USERS:
      return {
        ...state,
        isLoading: false,
        error: null,
        seccuss: null,
      };
    case ActionTypes.DELETING_USER:
      return {
        ...state,
        isLoading: true,
        error: null,
        seccuss: null,
      };
    case ActionTypes.DELETE_SUCCESS_USER:
      return {
        ...state,
        isLoading: false,
        error: null,
        seccuss: true,
      };
    case ActionTypes.DELETE_FAIL_USER:
      return {
        ...state,
        isLoading: false,
        error: true,
        seccuss: null,
      };
    case ActionTypes.ADDING_USER:
      return {
        ...state,
        isLoading: true,
        error: null,
        seccuss: null,
      };
    case ActionTypes.ADD_SUCCESS_USER:
      return {
        ...state,
        isLoading: false,
        error: null,
        seccuss: true,
      };
    case ActionTypes.ADD_FAIL_USER:
      return {
        ...state,
        isLoading: false,
        error: true,
        seccuss: null,
      };

    case ActionTypes.UPDATING_USER:
      return {
        ...state,
        isLoading: true,
        error: null,
        seccuss: null,
      };
    case ActionTypes.UPDATE_SUCCESS_USER:
      return {
        ...state,
        isLoading: false,
        error: null,
        seccuss: true,
      };
    case ActionTypes.UPDATE_FAIL_USER:
      return {
        ...state,
        isLoading: false,
        error: true,
        seccuss: null,
      };
    case ActionTypes.CLEAR_MESSAGES:
      return {
        ...state,
        isLoading: false,
        error: null,
        seccuss: null,
      };

    default:
      return state;
  }
};
