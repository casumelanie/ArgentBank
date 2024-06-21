import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login.reducer";

export default combineReducers({
    // Centralisation de tous les reducers
    loginReducer,
})