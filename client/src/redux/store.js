import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "../redux/reducers";
import storage from 'redux-persist/lib/storage'





const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(allReducers,enhancers);


export default store;
