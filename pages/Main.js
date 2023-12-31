import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductDetaile from "./ProductDetaile";
import CartComponent from "./CartComponent";
import ProfileComponent from "./ProfileComponent";
import Toast from 'react-native-toast-message';
import confirmOrder from "./confirmOrder";
import PaymentScreen from "../screens/PaymentScreen";
import Register from "../screens/Register";
import ForgetPassword from "../screens/ForgetPassword";
import ResetPassword from "../screens/ResetPassword";
import Login from "../screens/Login";
import ChangePassword from "../screens/changePassword";
import Profile from "./Profile";
import ConfirmOrder from "./confirmOrder";
import UpdateProfile from "./updateProfile";
import AdminPanel from "./adminPanel";
import Order from "./Order";
import Wallet from "./Wallet";
import AdminProducts from "./products";
import AdminAnalysics from "./adminAnalysics";
import AdminGetAllProducts from "./AdminGetAllProducts";
import AdminGetAllOrders from "./AdminGetAllOrders";
import AdminaddProduct from "./AdminaddProduct";
import AdmingetAllPayment from "./AdmingetAllPayment";
import AdminGetAllUsers from "./AdminGetAllUsers";
import AdminAddCategory from "./AdminAddCategory";
import AdminUpdateProduct from "./adminUpdateProduct";
import CameraScreen from "./CameraScreen";
import ProductImages from "./ProductImages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userLoadData } from "../redux/Auth/userSlice";

const Stack = createNativeStackNavigator();
const Main = () => {
   const {user}=useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(userLoadData());
  },[dispatch]);
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="productDetaile" component={ProductDetaile} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="cart" component={CartComponent} />
          <Stack.Screen name="confirmOrder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={PaymentScreen} />
          


          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="SignUp" component={Register} />
          <Stack.Screen name="forgetPassword" component={ForgetPassword} />
          <Stack.Screen name="resetPassword" component={ResetPassword} />
          <Stack.Screen name="changePassword" component={ChangePassword} />
          <Stack.Screen name="updateProfile" component={UpdateProfile} />
          <Stack.Screen name="profileImage" component={Profile} />
          
          <Stack.Screen name="order" component={Order} />



          <Stack.Screen name="dashboard" component={AdminPanel} />
          <Stack.Screen name="wallets" component={Wallet} />
          <Stack.Screen name="products" component={AdminProducts} />
          <Stack.Screen name="admingetAllproducts" component={AdminGetAllProducts} />
          <Stack.Screen name="admingetAllOrders" component={AdminGetAllOrders} />

          <Stack.Screen name="adminaddProduct" component={AdminaddProduct} />
          <Stack.Screen name="adminAddCategory" component={AdminAddCategory} />
          <Stack.Screen name="admingetAllPayment" component={AdmingetAllPayment} />
          <Stack.Screen name="adminGetAllUsers" component={AdminGetAllUsers} />
          <Stack.Screen name="adminUpdateProduct" component={AdminUpdateProduct} />
          <Stack.Screen name="productImages" component={ProductImages} />

          <Stack.Screen name="camera" component={CameraScreen} />

          


          
          

          
        </Stack.Group>
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
};

export default Main;
