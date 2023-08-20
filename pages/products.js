import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AdminFooter from "./adminFooter";
import { BarChart, LineChart, PieChart } from "react-native-chart-kit";
import { Avatar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    name: "stock",
    population: 2500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 10
  },
  {
    name: "sell",
    population: 2800000,
    color: "#c70049",
    legendFontColor: "#c70049",
    legendFontSize: 10
  },

  {
    name: "buy",
    population: 3538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 10
  },
];

const AdminProducts = () => {
  const navigation=useNavigation();
  return (

     <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View className="flex-row justify-between items-center mx-4 my-4 border-b border-gray-100 pb-2">
       <View className="flex-row p-3 rounded-full bg-gray-100">
       <TouchableOpacity
           onPress={()=>navigation.goBack()}
       >
       <Avatar.Icon
              size={27}
              icon="arrow-left"
              color="white"
              className="bg-color1"
            
            />
       </TouchableOpacity>
      
       <Text className="font-bold text-[17px] ml-3">Products</Text>
       </View>
        <View className="flex-row p-3 rounded-full bg-gray-100">
          <Ionicons name="moon" size={22} color="black" />
        </View>
      </View>
      <ScrollView
     showsVerticalScrollIndicator={false}
   >
      <View className="flex-1 relative">
        <PieChart
          style={{
            marginVertical: 8,
            marginHorizontal: 5,
            borderRadius: 16,
          }}
          data={data}
          width={Dimensions.get("window").width - 10}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          
          accessor={"population"}
          backgroundColor={"#edf2f7"}
          paddingLeft={"5"}
          center={[0, 0]}
          absolute
        />
        <View className="absolute top-3 right-3 bg-white rounded-full">
          <TouchableOpacity 
            activeOpacity={0.9}
          onPress={() => navigation.navigate("analysis")}>
            <Avatar.Icon
              size={27}
              icon="arrow-right"
              color="white"
              className="bg-color1"
            />
          </TouchableOpacity>
        </View>
        <View className="w-full flex-row items-center mx-4 my-2">
        <TouchableOpacity className="w-[45%] rounded-lg bg-color1 p-2 mr-2 shadow-lg transition-transform active:scale-95 duration-0">
          <View className="flex-row items-center justify-between ">
           <Text className="font-bold text-lg text-white px-2">All Product</Text>
           <Avatar.Icon
              size={27}
              icon="arrow-right"
              color="white"
              className="bg-color1"
            />
          </View>
          <View className="flex-row items-center justify-between mx-2">
            <Text className="text-xs text-white my-2">Products Size </Text>
            <Text className="font-semibold text-white my-2">2345</Text>
          </View>
          <View className="flex-row items-center justify-between mx-2 mt-3">
            <Text className="text-xs text-white">0%</Text>
            <Text className="text-xs text-white">100%</Text>
          </View>
          <View className="bg-black/[0.7] h-2 mx-2 my-2 rounded-full">
            <View className="bg-white h-2 rounded-full w-[50%]"></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-[45%] rounded-lg bg-gray-100 p-2 transition-transform active:scale-95 duration-0">
        <View className="flex-row items-center justify-between ">
           <Text className="font-bold text-lg text-black px-2">All Orders</Text>
           <Avatar.Icon
              size={27}
              icon="arrow-right"
              color="black"
              className="bg-transparent"
            />
          </View>
          <View className="flex-row items-center justify-between mx-2">
            <Text className="font-semibold text-black/[0.7] my-2">Orders </Text>
            <Text className="font-semibold text-black/[0.7] my-2">1234</Text>
          </View>
          <View className="flex-row items-center justify-between mx-2 mt-3">
            <Text className="text-xs text-black/[0.7]">0%</Text>
            <Text className="text-xs text-black/[0.7]">100%</Text>
          </View>
          <View className="bg-gray-500/[0.7] h-2 mx-2 my-2 rounded-full">
            <View className="bg-gray-200 h-2 rounded-full w-[50%]"></View>
          </View>
        </TouchableOpacity>
      </View>
      <View className="w-full flex-row items-center mx-4 my-4 border-b border-gray-100 pb-5">
        <TouchableOpacity className="w-[45%] rounded-lg bg-gray-100 p-2 mr-2 shadow-lg transition-transform active:scale-95 duration-0">
        <View className="flex-row items-center justify-between ">
           <Text className="font-bold text-lg text-black px-2">Add Product</Text>
           <Avatar.Icon
              size={27}
              icon="arrow-right"
              color="black"
              className="bg-transparent"
            />
          </View>
          <View className="flex-row items-center justify-between mx-2">
            <Text className="font-semibold text-black/[0.7] my-2">
              new 
            </Text>
          </View>
          <View className="flex-row items-center justify-between mx-2 mt-3">
            <Text className="text-xs text-black/[0.7]">0%</Text>
            <Text className="text-xs text-black/[0.7]">80%</Text>
          </View>
          <View className="bg-gray-400/[0.7] h-2 mx-2 my-2 rounded-full">
            <View className="bg-gray-300 h-2 rounded-full w-[50%]"></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-[45%] rounded-lg bg-gray-100 p-2 transition-transform active:scale-95 duration-0">
        <View className="flex-row items-center justify-between ">
           <Text className="font-bold text-lg text-black px-2">Add Category</Text>
           <Avatar.Icon
              size={27}
              icon="arrow-right"
              color="black"
              className="bg-transparent"
            />
          </View>
          <View className="flex-row items-center justify-between mx-2">
            <Text className="font-semibold text-black/[0.7] my-2">
              category
            </Text>
          </View>
          <View className="flex-row items-center justify-between mx-2 mt-3">
            <Text className="text-xs text-black/[0.7]">0%</Text>
            <Text className="text-xs text-black/[0.7]">85%</Text>
          </View>
          <View className="bg-gray-400/[0.7] h-2 mx-2 my-2 rounded-full">
            <View className="bg-white h-2 rounded-full w-[50%]"></View>
          </View>
        </TouchableOpacity>
     
      </View>
      <View className="w-full flex-row items-center mx-4 -mt-4 mb-12 border-b border-gray-100 pb-5">
        <TouchableOpacity className="w-[45%] rounded-lg bg-gray-100 p-2 mr-2 shadow-lg transition-transform active:scale-95 duration-0">
        <View className="flex-row items-center justify-between ">
           <Text className="font-bold text-lg text-black px-2">All Payment</Text>
           <Avatar.Icon
              size={27}
              icon="arrow-right"
              color="black"
              className="bg-transparent"
            />
          </View>
          <View className="flex-row items-center justify-between mx-2">
            <Text className="font-semibold text-black/[0.7] my-2">
              payment 
            </Text>
          </View>
          <View className="flex-row items-center justify-between mx-2 mt-3">
            <Text className="text-xs text-black/[0.7]">0%</Text>
            <Text className="text-xs text-black/[0.7]">80%</Text>
          </View>
          <View className="bg-gray-400/[0.7] h-2 mx-2 my-2 rounded-full">
            <View className="bg-gray-300 h-2 rounded-full w-[50%]"></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-[45%] rounded-lg bg-gray-100 p-2 transition-transform active:scale-95 duration-0">
        <View className="flex-row items-center justify-between ">
           <Text className="font-bold text-lg text-black px-2">All Users</Text>
           <Avatar.Icon
              size={27}
              icon="arrow-right"
              color="black"
              className="bg-transparent"
            />
          </View>
          <View className="flex-row items-center justify-between mx-2">
            <Text className="font-semibold text-black/[0.7] my-2">
              Clients{" "}
            </Text>
          </View>
          <View className="flex-row items-center justify-between mx-2 mt-3">
            <Text className="text-xs text-black/[0.7]">0%</Text>
            <Text className="text-xs text-black/[0.7]">85%</Text>
          </View>
          <View className="bg-gray-400/[0.7] h-2 mx-2 my-2 rounded-full">
            <View className="bg-white h-2 rounded-full w-[50%]"></View>
          </View>
        </TouchableOpacity>
     
      </View>
      </View>
   
      </ScrollView>
      <AdminFooter />
    </View>
 
  );
};

export default AdminProducts;
