import { ActionTypes } from "../contants/action-types"
import { returnErrors } from './errorActions';
import { publicRequest, show, userRequest } from "../../requestMethods";
import { logoutReset, logoutSuccess } from "./authActions";


export const getCart = async (dispatch, loggedUser) => {
  dispatch({ type: ActionTypes.LOADING_CART });

  console.log(loggedUser)
  try {
    const res = await userRequest.get(`carts/find/` + loggedUser);
    const quantity = res.data.length
    console.log(res)
  
    let payload = res.data;
   
    console.log(payload)
    dispatch({ type: ActionTypes.SYNC_DB_CART, payload });

  } catch (error) {
    console.log(error)
    dispatch(returnErrors(error.response));
  }
};


export const addToCart = (payload) => {

  return {
    type: ActionTypes.ADD_TO_CART,
    payload: payload
  };

};


export const addOneToCart = (payload) => {

  return {
    type: ActionTypes.ADD_ONE_TO_CART,
    payload: payload
  };

};




export const removeFromCart = (payload) => {

  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: payload
  };

};


export const removeOneFromCart = (payload) => {

  return {
    type: ActionTypes.REMOVE_ONE_FROM_CART,
    payload: payload
  };

};

export const clearCart = () => {

  return {
    type: ActionTypes.CLEAR_CART,
    
  };

};






export const updateCart = async (dispatch, cart, loggedUser,loggingOut) => {
  
  if(!loggingOut){
  dispatch({ type: ActionTypes.UPDATE_CART });
  console.log(cart)
  try {

    userRequest.put(`carts/` + loggedUser.id, {
      userId: loggedUser.id,
      cart

    })

    //.then( dispatch(logoutReset()))

  } catch (error) {
    console.log(error.response)
  }
}
};




  // export const clearProduct = async (dispatch) => {
  //   dispatch({ type: ActionTypes.CLEAR_PRODUCT });

  // };

