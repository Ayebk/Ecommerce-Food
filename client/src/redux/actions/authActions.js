import { ActionTypes } from "../contants/action-types"
import axios from 'axios'
import { returnErrors } from './errorActions';
import { publicRequest } from "../../requestMethods";

//User Loading
export const loadingUser = async (user) => {
    return {
        type: ActionTypes.USER_START,
    };
};



//Register Success
export const registerSuccess = (user) => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
    };
};


//Register Fail
export const registerFail = (user) => {
    return {
        type: ActionTypes.REGISTER_FAIL,
    };
};



// //Login Success
// export const loginSuccess = (user) => {
//     return {
//         type: ActionTypes.LOGIN_SUCCESS,
//         payload: user
//     };
// };


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





