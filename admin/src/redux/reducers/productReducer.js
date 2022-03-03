import { ActionTypes } from "../contants/action-types";

const initialState = {
  isLoading: false,
  products: [],
  selectedProduct: null,
  error:null,
  seccuss:null
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOADING_PRODUCTS:
      return {
        ...state,
        products: [],
        isLoading: true,
        error:null,
        seccuss:null
      };
    case ActionTypes.LOADING_SUCCESS_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        error:null,
        seccuss:null,
      };

    case ActionTypes.GET_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
        isLoading: false,
        error:null,
        seccuss:null
      };
    case ActionTypes.CLEAR_PRODUCT:
      return {
        ...state,
        selectedProduct: null,
        isLoading: false,
        error:null,
        seccuss:null
      };

    case ActionTypes.LOADING_FAIL_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        error:null,
        seccuss:null
      };
    case ActionTypes.DELETING_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error:null,
        seccuss:null
      };
    case ActionTypes.DELETE_SUCCESS_PRODUCT:
      return {
        ...state,
        isLoading: false,
        error: null,
        seccuss:true
      };
    case ActionTypes.DELETE_FAIL_PRODUCT:
      return {
        ...state,
        isLoading: false,
        error:true,
        seccuss:null

      };
      case ActionTypes.ADDING_PRODUCT:
        return {
          ...state,
          isLoading: true,
          error:null,
          seccuss:null
        };
      case ActionTypes.ADD_SUCCESS_PRODUCT:
        return {
          ...state,
          isLoading: false,
          error: null,
          seccuss:true
        };
      case ActionTypes.ADD_FAIL_PRODUCT:
        return {
          ...state,
          isLoading: false,
          error:true,
          seccuss:null
        }; 

      case ActionTypes.UPDATING_PRODUCT:
        return {
          ...state,
          isLoading: true,
          error:null,
          seccuss:null
        };
      case ActionTypes.UPDATE_SUCCESS_PRODUCT:
        return {
          ...state,
          isLoading: false,
          error:null,
          seccuss:true
        };
      case ActionTypes.UPDATE_FAIL_PRODUCT:
        return {
          ...state,
          isLoading: false,
          error:true,
          seccuss:null
        };
        case ActionTypes.CLEAR_MESSAGES:
          return {
            ...state,
            isLoading: false,
            error:null,
            seccuss:null
          };

    default:
      return state;
  }
};
