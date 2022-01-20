import { ActionTypes } from "../contants/action-types"
import axios from 'axios'
import { returnErrors } from '../actions/errorActions';
import { publicRequest, userRequest } from "../../requestMethods";


//thunk

export const loginUser = async (dispatch, user) => {
  // User loading
  dispatch({ type: ActionTypes.LOGIN_START });
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data)
    localStorage.setItem("token", res.data.accessToken)
    localStorage.setItem("username", res.data.username)
    localStorage.setItem("email", res.data.email)

    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload:  res.data });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.AUTH_ERROR });
  }
};


export const registerUser = async (dispatch, user) => {

  try {
    const res = await publicRequest.post("/auth/register", user);

    dispatch({ type: ActionTypes.REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.AUTH_ERROR });
  }
};



export const getProducts = async (dispatch, category) => {
  dispatch({ type: ActionTypes.LOADING_PRODUCTS });
  
  try {
    const res = await userRequest.get(category.category ? `/products?category=${category.category}` : `/products/`);
    console.log(res.data)

    dispatch({ type: ActionTypes.LOADING_SUCCESS_PRODUCTS, payload: res.data });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.LOADING_FAIL_PRODUCTS });
  }
};