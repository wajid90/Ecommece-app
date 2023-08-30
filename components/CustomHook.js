import React from 'react'
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { userLoadData } from '../redux/Auth/userSlice';

const useCustomHook = (navigation,dispatch,navigateTo="login") => {
    const {  isError,
        isSuccess,
        isLoadding,
        isAuthenticated,
        successMessage,
        errorMessage
      }=useSelector((state)=>state.auth);
    
      useEffect(()=>{
        if(isError){
          Toast.show({
            type:"error",
            text1:errorMessage
          })
          dispatch({
            type:"clearError"
          });
        }
        if(isSuccess){
          navigation.reset({
            index:0,
            routes:[{name:navigateTo}]
          });
          Toast.show({
            type:"success",
            text1:successMessage
          })
          
          dispatch({
            type:"clearSuccess",
          });
          dispatch(userLoadData());
        }
      },[isError,isSuccess,dispatch]);

      return isLoadding;
}


const useCustomHook2 = (dispatch,navigation,navigateTo,func) => {
    const {  isError,
        isSuccess,
        isLoadding,
        isAuthenticated,
        successMessage,
        errorMessage
      }=useSelector((state)=>state.auth);
    
      useEffect(()=>{
        if(isError){
          Toast.show({
            type:"error",
            text1:errorMessage
          })
          dispatch({
            type:"clearError"
          });
        }
        if(isSuccess){
          
          Toast.show({
            type:"success",
            text1:successMessage
          })
          
          dispatch({
            type:"clearSuccess",
            text1:errorMessage
          });

          navigateTo && navigation.navigate(navigateTo);
          func && dispatch(func());
        }
      },[isError,isSuccess,dispatch]);

      return isLoadding;
}

export {useCustomHook2};
export default useCustomHook