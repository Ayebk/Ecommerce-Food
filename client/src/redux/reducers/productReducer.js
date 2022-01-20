import { ActionTypes } from "../contants/action-types"

const initialState = {
    isLoading: false,
    products: []
}


export const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.LOADING_PRODUCTS:
            return {
                ...state,
                products:[],
                isLoading: true
            };
        case ActionTypes.LOADING_SUCCESS_PRODUCTS:
            return {
                ...state,
                products: payload,
                isLoading: false
            };

        case ActionTypes.LOADING_FAIL_PRODUCTS:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }

}