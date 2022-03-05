import { ActionTypes } from "../contants/action-types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ERRORS:
      return {
        data: payload,
        status: payload,
        id: payload,
      };
    case ActionTypes.CLEAR_ERRORS:
      return {
        data: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};
