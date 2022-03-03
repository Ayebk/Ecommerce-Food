import { ActionTypes } from "../contants/action-types"
import { returnErrors } from './errorActions';
import { publicRequest, userRequest } from "../../requestMethods";


export const getProducts = async (dispatch, category) => {
    dispatch({ type: ActionTypes.LOADING_PRODUCTS });
    
    try {
      const res = await publicRequest.get("/products");
      console.log(res.data)
  
      dispatch({ type: ActionTypes.LOADING_SUCCESS_PRODUCTS, payload: res.data });
      dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    } catch (error) {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({ type: ActionTypes.LOADING_FAIL_PRODUCTS });
      dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    }
  };


  export const updateProduct = async (dispatch, id,inputs,img) => {
    console.log(id)
    console.log(inputs)
    console.log(img)
    dispatch({ type: ActionTypes.UPDATING_PRODUCT });
    
    try {
      const res = await userRequest.put(`/products/${id}` ,{...inputs,img});
      console.log(res.data)
  
      dispatch({ type: ActionTypes.UPDATE_SUCCESS_PRODUCT });
      dispatch({ type: ActionTypes.CLEAR_MESSAGES });
      console.log( res.data)
      return res.data
    } catch (error) {
      
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({ type: ActionTypes.UPDATE_FAIL_PRODUCT });
      dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    }
  };


  
  export const addProduct = async (dispatch, product,img) => {
    dispatch({ type: ActionTypes.ADDING_PRODUCT });
    console.log(img)
    try {
      const res = await userRequest.post(`/products/`,{...product,img});
      console.log(res.data)
  
      dispatch({ type: ActionTypes.ADD_SUCCESS_PRODUCT });
      dispatch({ type: ActionTypes.CLEAR_MESSAGES });
      return res.data
    } catch (error) {
      
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({ type: ActionTypes.ADD_FAIL_PRODUCT });
      dispatch({ type: ActionTypes.CLEAR_MESSAGES });
    }
  };





  export const deleteProduct = async (dispatch, id) => {
    console.log(id)
    dispatch({ type: ActionTypes.DELETING_PRODUCT });
    
    try {
      const res = await userRequest.delete(`/products/${id}`);
      if(res){
        getProducts(dispatch)
      }
      console.log(res.data)
      
      dispatch({ type: ActionTypes.DELETE_SUCCESS_PRODUCT });
      dispatch({ type: ActionTypes.CLEAR_MESSAGES });
      return res
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
      console.log(res.data)
  
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

