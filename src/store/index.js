import { configureStore } from "@reduxjs/toolkit";
import {reducer as userReducer} from './auth'


export const store = configureStore({
    reducer:{
       user: userReducer
    }
})

export default store
