import reducer from "./reducer"
import { applyMiddleware, legacy_createStore, combineReducers } from "redux"
import thunk from "redux-thunk"


const rootreducer = combineReducers({ reducer })
const store = legacy_createStore(rootreducer, applyMiddleware(thunk))
export default store

