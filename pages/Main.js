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
          <Stack.Screen name="profile" component={ProfileComponent} />
          <Stack.Screen name="cart" component={CartComponent} />
          <Stack.Screen name="confirmOrder" component={confirmOrder} />
          <Stack.Screen name="payment" component={PaymentScreen} />
          


          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="SignUp" component={Register} />
          <Stack.Screen name="forgetPassword" component={ForgetPassword} />
          <Stack.Screen name="resetPassword" component={ResetPassword} />
          <Stack.Screen name="changePassword" component={ChangePassword} />
          





          
        </Stack.Group>
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
};

export default Main;
