import { ActionTypes } from "../contants/action-types"



export const loadingProduct = (error) =>{
    return{
        type:ActionTypes.LOADING_PRODUCTS
    };
}


export const loadingSuccessProduct = () =>{
    return{
        type: ActionTypes.LOADING_SUCCES_PRODUCTS,
    };
};


export const loadingFailProduct = (error) =>{
    return {
        type:ActionTypes.LOADING_FAIL_PRODUCTS,
        payload:error
    }
}
