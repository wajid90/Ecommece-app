import {
  View,
  Text,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import Header1 from "../components/Header1";
import { useNavigation,useIsFocused } from "@react-navigation/native";
import Loader from "../components/Loader";
import { useAdminProduct } from "../components/CustomHook";
import { useDispatch } from "react-redux";
import { deleteProductData } from "../redux/Products/productSlice";


const AdminGetAllProducts = () => {
  const navigation=useNavigation();
  const isFocused=useIsFocused();
  const dispatch=useDispatch();
  const [toggle, setToggle] = useState(false);
  const [indexData, setIndexData] = useState(null);
  
  const {loadding,products,inStock,outOfStock}=useAdminProduct(dispatch,isFocused);

  const setToggleHandler = (_id) => {
    const indexData = products?.products?.findIndex(
      (item) => item._id.toString() === _id.toString()
    );

    if (indexData === -1) {
      return;
    }
    setIndexData(indexData);
    setToggle(!toggle);
  };

   const handleDateProduct=(id)=>{
    console.log(id);
    Alert.alert("Delete Product","Are you sure you  want to delete a product ...",[
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        
      },
      {text: 'OK', onPress: () => dispatch(deleteProductData(id))},
    ]);
   }

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
      className="bg-gray-200"
    >
      <Header1 headertext="All Products" />
      <View className="bg-black mx-3 flex-row  rounded-t-lg">
        <Text className="flex-1 text-center   px-1 py-3 text-white">Image</Text>
        <Text className="flex-1 text-center   px-1 py-3 text-white">Price</Text>
        <Text className="flex-1 text-center   px-1 py-3 text-white">Name</Text>
        <Text className="flex-1 text-center   px-1 py-3 text-white">
          Category
        </Text>
        <Text className="flex-1 text-center   px-1 py-3 text-white">Stock</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loadding ? (
          <Loader/>
        ) : (
          products?.products?.length>0 && products?.products?.map((item, index) => (
            <>
              <TouchableOpacity
             
                onPress={() => setToggleHandler(item._id)}
                activeOpacity={0.8}
                className="transition duration-200 delay-100"
              >
                <View className="bg-white mx-3 flex-row my-2 p-2"    key={index}>
                  <Image
                    source={{
                      uri: item.images[0].url,
                    }}
                    width={20}
                    height={40}
                    resizeMode="contain"
                    style={{
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
                  <Text
                    numberOfLines={2}
                    className="flex-1 text-center text-[12px]   px-1 py-3"
                  >
                    {item.price}
                  </Text>
                  <Text
                    numberOfLines={1}
                    className="flex-1 text-center  text-[10px]  px-1 py-3"
                  >
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    className="flex-1 text-center  text-[10px]  px-1 py-3"
                  >
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    className="flex-1 text-center  text-[12px]  px-1 py-3"
                  >
                    {item.stock}
                  </Text>
                </View>
              </TouchableOpacity>
              {toggle && indexData === index && (
                <View className="bg-gray-200 mx-3 flex-col mb-1 -mt-2 p-2">
                  <View className="mx-3 flex-col">
                    <Text className="text-[12px]  text-black">
                        Description :
                    </Text>
                    <Text numberOfLines={2} className="text-[10px]  text-black">{item.description}</Text>
                  </View>

                 <View className="flex-row mx-3 mt-2 justify-between">
                 <TouchableOpacity
                  onPress={()=>navigation.navigate("adminUpdateProduct",{
                    id:item?._id
                  } 
                  )}
                   className="px-3 py-2 bg-gray-400 rounded-full"
                 >
                    <Text className="text-[10px] text-white">Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=>handleDateProduct(item?._id)}                
                    className="px-3 py-2 bg-gray-400 rounded-full"
                  >
                    <Text className="text-[10px] text-white">Delete</Text>
                  </TouchableOpacity>
                 </View>
                </View>
              )}
            </>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default AdminGetAllProducts;
