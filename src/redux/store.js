import { applyMiddleware, combineReducers, createStore } from "redux";
import themeReducer from "./themReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import themeSlicer from './themeSlice'

// const rootReducer=combineReducers({
//     themeReducer
// })
// const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))


const store=configureStore({
    reducer:{
        themereducer: themeSlicer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store