import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import { Platform } from "react-native";
import Header1 from "../components/Header1";
import OrderItemsCart from "../components/OrderItemsCart";
import { useCustomHook2, useGetOrders } from "../components/CustomHook";
import { useIsFocused } from "@react-navigation/native";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { proccessOrderData } from "../redux/Auth/userSlice";


const Order = () => {
   const isFocused=useIsFocused();
   const {loadding,orders}=useGetOrders(isFocused);
   const {user}=useSelector((state)=>state.auth);


  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Header1 headertext="My Orders" />

      {loadding ? (
        <Loader />
      ) : (
        <View
          style={{
            flex:1,
            marginTop:0
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {
              orders.length>0?(
                orders.map((item,index)=>(
                  <OrderItemsCart
                  index={index}
                  id={item._id}
                  price={item.totalAmount}
                  address={item.shippingInfo.address}
                  city={item.shippingInfo.city}
                  pinCode={item.shippingInfo.pinCode}
                  country={item.shippingInfo.country}

                  orderedOn={item.createdAt}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  updateHandler={updateHandler}
                  admin={user?.role==="admin"}
                  />
                ))
              ):(
                <View className="flex-1 justify-center items-center"
                >
                  <Text>Order Does Not Exist Yet</Text>
                </View>
              )
            }
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Order;
