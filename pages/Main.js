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

const Stack = createNativeStackNavigator();
const Main = () => {
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
          <Stack.Screen name="adminPanel" component={AdminPanel} />
          <Stack.Screen name="order" component={Order} />



          


          
          

          
        </Stack.Group>
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
};

export default Main;
