
import {  configureStore } from '@reduxjs/toolkit'
import authReducer from "./redux/Auth/userSlice";
import { combineReducers } from 'redux'



const reducer = combineReducers({
  auth : authReducer,
});

 const store = configureStore({
  reducer,
middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
  serializableCheck: false,
}),
devTools:true
});

export default store;