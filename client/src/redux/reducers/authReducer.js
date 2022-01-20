import { ActionTypes } from "../contants/action-types"

const initialState = {
    username:localStorage.getItem('username'),
    email:localStorage.getItem('email'),
    accessToken:localStorage.getItem('token'),
    isLoading: false,
}


export const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.LOGIN_START:
            return { 
                ...state, 
                isLoading: true };
   
        case ActionTypes.LOGIN_SUCCESS:
        case ActionTypes.REGISTER_SUCCESS:
            return { 
                ...state,
                ...payload, 
                isLoading:false, 
                };
        case ActionTypes.AUTH_ERROR:
        case ActionTypes.LOGIN_FAIL:
        case ActionTypes.LOGOUT_SUCCESS:
        case ActionTypes.REGISTER_FAIL:
            return { 
                ...state,
                accessToken: localStorage.removeItem('token'),
                username:localStorage.removeItem('username'),
                email:localStorage.removeItem('email'),
                isLoading:false,
                };
        default:
            return state;
    }

}