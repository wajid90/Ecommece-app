
import {  configureStore } from '@reduxjs/toolkit'
import authReducer from "./redux/Auth/userSlice";
import productsReducer from "./redux/Products/productSlice";

import { combineReducers } from 'redux'



const reducer = combineReducers({
  auth : authReducer,
  products:productsReducer
});

 const store = configureStore({
  reducer,
middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
  serializableCheck: false,
}),
devTools:true
});

export default store;