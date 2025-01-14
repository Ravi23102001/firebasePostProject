import { applyMiddleware, combineReducers, createStore } from "redux";
import themeReducer from "./themReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer=combineReducers({
    themeReducer
})
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store