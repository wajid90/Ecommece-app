import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button, RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../redux/Products/productSlice";
import Loader from "./Loader";



const ProductModel = ({ useObsecureText, setCategory, category }) => {
  const {categories,isLoadding}=useSelector((state)=>state.products);
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getAllCategories());
  },[]);
   
  return (
    <View className="absolute left-4 top-7   bg-gray-200 z-10 w-[93%] h-[96%] mx-auto rounded-lg shadow-lg">
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => useObsecureText(false)}
        className="w-full"
      >
        <View className="h-7 w-7 rounded-full  absolute right-2 top-2 flex-row justify-center items-center bg-color1">
          <Ionicons name="close-circle-outline" size={22} color="white" />
        </View>
      </TouchableOpacity>
<ScrollView showsVerticalScrollIndicator={false}>
 {
  isLoadding===true ?<Loader/>:<View className="mt-12 mx-2">
  <Text className="text-center p-4  font-bold text-[16px]">Select Categories</Text>
  <RadioButton.Group
      onValueChange={(value) => setCategory(value)}
      value={category}
    >
      {categories.map((item, index) => (
        <RadioButton.Item key={index} label={item.category} value={item._id} textColor="gray" labelStyle={{
          color:"gray",
          padding:3
        }}
        color={"#c70049"}
        className="bg-white p-2 my-2 mx-2 rounded" />
      ))}
    </RadioButton.Group>
  </View>
 }
</ScrollView>
<TouchableOpacity
  onPress={() => useObsecureText(false)}
>
    <Button className="w-[90%] px-4 py-2 bg-color1 mx-auto rounded-full"
     textColor="white"
    >
        Set Category
    </Button>
</TouchableOpacity>
    </View>
  );
};

export default ProductModel;
