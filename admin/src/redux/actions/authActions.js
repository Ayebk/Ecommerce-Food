import { ActionTypes } from "../contants/action-types"
import axios from 'axios'
import { returnErrors } from './errorActions';
import { publicRequest } from "../../requestMethods";

//User Loading
export const loginUser = async (dispatch, user) => {
    console.log(user)
    // User loading
    dispatch({ type: ActionTypes.LOGIN_START });
    try {
      const res = await publicRequest.post("/auth/login", user);
      if(!res.data.isAdmin){
        throw "You Must be an Admin !"
      }
      console.log(res.data)
      localStorage.setItem("token", res.data.accessToken)
      localStorage.setItem("username", res.data.username)
      localStorage.setItem("email", res.data.email)
      localStorage.setItem("id", res.data._id)
  
      dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload:  res.data });
      return res
    } catch (error) {
      dispatch(returnErrors(error.response));
      dispatch({ type: ActionTypes.AUTH_ERROR });
    }
  };



//Register Success
export const registerUser = async (dispatch, user) => {

    try {
      const res = await publicRequest.post("/auth/register", user);
      console.log(res)
      dispatch({ type: ActionTypes.REGISTER_SUCCESS, payload: res.data });
      
    } catch (error) {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({ type: ActionTypes.AUTH_ERROR });
    }
  };



//Login Fail
export const loginFail = (user) => {
    return {
        type: ActionTypes.LOGIN_FAIL,
    };
};


//Logout Success
export const logoutSuccess = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS,
    };
};

export const logoutReset = () => {
  return {
      type: ActionTypes.LOGOUT_RESET,
  };
};


export const logoutProcess = () => {
  return {
      type: ActionTypes.LOGOUT_PROCESS,
  };
};


export const logoutProcessReset = async (dispatch) => {

  try {
    dispatch(logoutProcess());
    dispatch({ type: ActionTypes.LOGOUT_PROCESS_RESET });
    
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: ActionTypes.AUTH_ERROR });
  }
};

//DEMO ADMIN
export const loginDemoAdmin = () => {
  return {
      type: ActionTypes.LOGIN_DEMO_ADMIN,
  };
};




