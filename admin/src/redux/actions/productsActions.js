import { ActionTypes } from "../contants/action-types";
import { returnErrors } from "./errorActions";
import { publicRequest, userRequest } from "../../requestMethods";

export const getProducts = async (dispatch, category) => {
  dispatch({ type: ActionTypes.LOADING_PRODUCTS });

  try {
    const res = await publicRequest.get("/products");

    dispatch({ type: ActionTypes.LOADING_SUCCESS_PRODUCTS, payload: res.data });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.LOADING_FAIL_PRODUCTS });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  }
};

export const updateProduct = async (dispatch, id, inputs, img) => {

  dispatch({ type: ActionTypes.UPDATING_PRODUCT });

  try {
    const res = await userRequest.put(`/products/${id}`, { ...inputs, img });

    dispatch({ type: ActionTypes.UPDATE_SUCCESS_PRODUCT });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    return res.data;
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.UPDATE_FAIL_PRODUCT });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  }
};

export const addProduct = async (dispatch, product, img) => {
  dispatch({ type: ActionTypes.ADDING_PRODUCT });
  try {
    const res = await userRequest.post(`/products/`, { ...product, img });

    dispatch({ type: ActionTypes.ADD_SUCCESS_PRODUCT });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    return res.data;
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.ADD_FAIL_PRODUCT });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  }
};

export const deleteProduct = async (dispatch, id) => {
  dispatch({ type: ActionTypes.DELETING_PRODUCT });

  try {
    const res = await userRequest.delete(`/products/${id}`);
    if (res) {
      getProducts(dispatch);
    }

    dispatch({ type: ActionTypes.DELETE_SUCCESS_PRODUCT });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    return res;
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.DELETE_FAIL_PRODUCT });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  }
};

export const getProduct = async (dispatch, id) => {
  dispatch({ type: ActionTypes.LOADING_PRODUCTS });

  try {
    const res = await publicRequest.get("/products/find/" + id.id);

    dispatch({ type: ActionTypes.GET_PRODUCT, payload: res.data });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.LOADING_FAIL_PRODUCTS });
    dispatch({ type: ActionTypes.CLEAR_MESSAGES });
  }
};

export const clearProduct = async (dispatch) => {
  dispatch({ type: ActionTypes.CLEAR_PRODUCT });
};
