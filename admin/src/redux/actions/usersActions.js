import { ActionTypes } from "../contants/action-types";
import { returnErrors } from "./errorActions";
import { publicRequest, userRequest } from "../../requestMethods";

export const getUsers = async (dispatch, category) => {
  dispatch({ type: ActionTypes.LOADING_USERS });

  try {
    const res = await userRequest.get("/users");

    dispatch({ type: ActionTypes.LOADING_SUCCESS_USERS, payload: res.data });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.LOADING_FAIL_USERS });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  }
};

export const updateUser = async (dispatch, id, inputs, img) => {
 
  dispatch({ type: ActionTypes.UPDATING_USER });

  try {
    const res = await userRequest.put(`/users/${id}`, { ...inputs, img });

    dispatch({ type: ActionTypes.UPDATE_SUCCESS_USER });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    return res;
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.UPDATE_FAIL_USER });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  }
};

export const addUser = async (dispatch, inputs, img) => {
  dispatch({ type: ActionTypes.ADDING_USER });
 
  try {
    const res = await userRequest.post(`/auth/register`, { ...inputs, img });

    dispatch({ type: ActionTypes.ADD_SUCCESS_USER });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    return res;
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.ADD_FAIL_USER });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  }
};

export const deleteUser = async (dispatch, id) => {
  dispatch({ type: ActionTypes.DELETING_USER });

  try {
    const res = await userRequest.delete(`/users/${id}`);
    if (res) {
      getUsers(dispatch);
    }

    dispatch({ type: ActionTypes.DELETE_SUCCESS_USER });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    return res;
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.DELETE_FAIL_USER });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  }
};
