import { combineReducers} from 'redux';
import { errors } from "./errorReducer";
import { authReducer } from "./authReducer";
import { productReducer} from './productReducer'



const allReducers = combineReducers({

    //Error
    errors,
    //Auth
    auth: authReducer,
    products:productReducer

    

})

export default allReducers
