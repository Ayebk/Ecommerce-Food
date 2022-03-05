import { combineReducers } from "redux";
import { errors } from "./errorReducer";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { usersReducer } from "./usersReducer";

const allReducers = combineReducers({
  //Error
  errors,
  //Auth
  auth: authReducer,
  //Product
  products: productReducer,
  //User
  users: usersReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_RESET") {
    localStorage.clear();

    return allReducers(undefined, action);
  }
  return allReducers(state, action);
};

export default rootReducer;
