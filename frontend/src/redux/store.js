import {configureStore} from "@reduxjs/toolkit"
// import authReducers from "./auth.js";
import { jobReducer,authReducer } from "./auth.js";

export default configureStore({
    reducer:{
        auth: authReducer, 
        job: jobReducer,
    },
})


