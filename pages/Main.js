import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductDetaile from "./ProductDetaile";
import CartComponent from "./CartComponent";
import ProfileComponent from "./ProfileComponent";

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
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
