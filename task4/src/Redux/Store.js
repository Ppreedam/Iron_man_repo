import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import Appreducer from "./Appreducer/reducer";
import thunk from "redux-thunk";

const rootreducer = combineReducers({ Appreducer})
const Store = legacy_createStore(rootreducer, applyMiddleware(thunk))

export default Store