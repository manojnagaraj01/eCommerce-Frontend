import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
    auth:authReducer,
    //add other reducers here if needed
});

export default rootReducer;