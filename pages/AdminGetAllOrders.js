import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import { Platform } from "react-native";
import Header1 from "../components/Header1";
import OrderItemsCart from "../components/OrderItemsCart";


const orderData=[
  {
    _id:"lsvndvlnsvsdkksckjndkjcn",
    shippingInfo:{
      address:"73 nai basti firozabad",
      city:"Firozabad",
      country:"india",
      pinCode:283203
    },
    createdAt:"12-2-2022T2343",
    orderStatus:"Processing",
    paymentMethod:"COD",
    totalAmount:200,

  },
  {
    _id:"lsvndvlnsvsnkjcn",
    shippingInfo:{
      address:"730 nai basti firozabad",
      city:"Agra",
      country:"india",
      pinCode:283203
    },
    createdAt:"12-2-2022T2343",
    orderStatus:"Processing",
    paymentMethod:"COD",
    totalAmount:200,

  },
  {
    _id:"lsvndvlnsvsdkksccdcdkjndkjcn",
    shippingInfo:{
      address:"73 nai basti firozabad",
      city:"Firozabad",
      country:"india",
      pinCode:283203
    },
    createdAt:"12-2-2022T2343",
    orderStatus:"Processing",
    paymentMethod:"COD",
    totalAmount:200,

  },
  {
    _id:"lsvndvlnscccdcvsnkjcn",
    shippingInfo:{
      address:"730 nai basti firozabad",
      city:"Agra",
      country:"india",
      pinCode:283203
    },
    createdAt:"12-2-2022T2343",
    orderStatus:"Processing",
    paymentMethod:"COD",
    totalAmount:200,

  }
]
const AdminGetAllOrders = () => {
  const isLoading = false;
  const isAdmin=true;
  const updateHandler=(id)=>{
    console.log("button pressed ...."+id);
  }
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Header1 headertext="My Orders" />

      {isLoading ? (
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
              orderData.length>0?(
                orderData.map((item,index)=>(
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
                  admin={isAdmin}
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
}

export default AdminGetAllOrders