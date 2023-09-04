import React from "react";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";
import { userLoadData } from "../redux/Auth/userSlice";
import { useState } from "react";
import axios from "axios";
import { server } from "../utils/api";
import { getAllproducts } from "../redux/Products/productSlice";

const useCustomHook = (navigation, dispatch, navigateTo = "login") => {
  const {
    isError,
    isSuccess,
    isLoadding,
    isAuthenticated,
    successMessage,
    errorMessage,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: "error",
        text1: errorMessage,
      });
      dispatch({
        type: "clearError",
      });
    }
    if (isSuccess) {
      navigation.reset({
        index: 0,
        routes: [{ name: navigateTo }],
      });
      Toast.show({
        type: "success",
        text1: successMessage,
      });

      dispatch({
        type: "clearSuccess",
      });
      dispatch(userLoadData());
    }
  }, [isError, isSuccess, dispatch]);

  return isLoadding;
};
const useCustomHook4 = (dispatch, navigation, navigateTo, func ,id) => {
    const {
      isError,
      isSuccess,
      isLoadding,
      singleProduct,
      successMessage,
      errorMessage,
    } = useSelector((state) => state.products);
  
    useEffect(() => {
      if (isError) {
        Toast.show({
          type: "error",
          text1: errorMessage,
        });
        dispatch({
          type: "clearError",
        });
      }
      if (isSuccess) {
        Toast.show({
          type: "success",
          text1: successMessage,
        });
  
        dispatch({
          type: "clearSuccess",
          text1: errorMessage,
        });
  
        navigateTo && navigation.navigate(navigateTo);
        func && dispatch(func(id));
      }
    }, [isError, isSuccess, dispatch,id,singleProduct]);
  
    return {isLoadding,singleProduct};
  };
const useCustomHook3 = (dispatch, navigation, navigateTo, func) => {
    const {
      isError,
      isSuccess,
      isLoadding,
      successMessage,
      errorMessage,
    } = useSelector((state) => state.products);
  
    useEffect(() => {
      if (isError) {
        Toast.show({
          type: "error",
          text1: errorMessage,
        });
        dispatch({
          type: "clearError",
        });
      }
      if (isSuccess) {
        Toast.show({
          type: "success",
          text1: successMessage,
        });
  
        dispatch({
          type: "clearSuccess",
          text1: errorMessage,
        });
  
        navigateTo && navigation.navigate(navigateTo);
        func && dispatch(func());
      }
    }, [isError, isSuccess, dispatch]);
  
    return isLoadding;
  };
  const useCustomHook5 = (dispatch, navigation, navigateTo, func,categoryId) => {
    const {
      isError,
      isSuccess,
      isLoadding,
      successMessage,
      errorMessage,
      categories,
      products
    } = useSelector((state) => state.products);
  
    useEffect(() => {
      if (isError) {
        Toast.show({
          type: "error",
          text1: errorMessage,
        });
        dispatch({
          type: "clearError",
        });
      }
      if (isSuccess) {
        Toast.show({
          type: "success",
          text1: successMessage,
        });
  
        dispatch({
          type: "clearSuccess",
          text1: errorMessage,
        });
  
        navigateTo && navigation.navigate(navigateTo);
        func && dispatch(func());
      }
    }, [dispatch,isError, isSuccess,errorMessage,successMessage,categoryId]);
  
    return {isLoadding,products,categories};
  };
const useCustomHook2 = (dispatch, navigation, navigateTo, func) => {
  const {
    isError,
    isSuccess,
    isLoadding,
    isAuthenticated,
    successMessage,
    errorMessage,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: "error",
        text1: errorMessage,
      });
      dispatch({
        type: "clearError",
      });
    }
    if (isSuccess) {
      Toast.show({
        type: "success",
        text1: successMessage,
      });

      dispatch({
        type: "clearSuccess",
        text1: errorMessage,
      });

      navigateTo && navigation.navigate(navigateTo);
      func && dispatch(func());
    }
  }, [isError, isSuccess, dispatch]);

  return isLoadding;
};

export const useGetOrders = (isFocused, isAdmin = false) => {
  const [orders, setOrders] = useState([]);
  const [loadding, setLoadding] = useState(false);

  useEffect(() => {
    setLoadding(true);
    axios
      .get(`${server}/order/${isAdmin ? "admin" : "my"}`)
      .then((res) => {
        setOrders(res.data.orders);
        setLoadding(false);
      })
      .catch((e) => {
        Toast.show({
          type: "error",
          text1: e.response.data.message,
        });
        setLoadding(false);
      });
  }, [isFocused]);
  return {
    loadding,
    orders,
  };
};

export const useAdminProduct=(dispatch,isFocused)=>{
    const {products,inStock,outOfStock,isError,loadding,isSuccess,successMessage,errorMessage}=useSelector((state)=>state.products);
     
    useEffect(()=>{
       if(isError){
        Toast.show({
            type:"error",
            text1:errorMessage
        })
        dispatch({
            type:"clearError"
        })
       }
       if(isSuccess){
        Toast.show({
            type:"error",
            text1:successMessage
        })
        dispatch({
            type:"clearSuccess",
        })
       }

       dispatch(getAllproducts());
    },[dispatch,isFocused,isError,isSuccess]);

    return {
        products,
        inStock,
        outOfStock,
        loadding
    }

}
export { useCustomHook2,useCustomHook3,useCustomHook4 ,useCustomHook5};
export default useCustomHook;
