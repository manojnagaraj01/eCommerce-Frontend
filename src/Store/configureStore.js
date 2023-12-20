import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

const store = configureStore({
    reducer:rootReducer,
    //add middleware, enchancers, or dev tools configurations if needed
})


export default store;
