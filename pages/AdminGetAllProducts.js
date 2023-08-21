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
import { useNavigation } from "@react-navigation/native";

const products = [
  {
    _id: "64d88c194a214b6feb2744e4",
    name: "latest Furniture",
    description: "this is the latest products to buy km lknclksdncndckjd kcnskdjnckjds ksjnckjsdnc kjsnckjdnc kjjkcnsdkjc kjnckjsndc ",
    price: 1000,
    stock: 5,
    images: [
      {
        public_id: "etgrgeiteb73wk3ofqis",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691914272/etgrgeiteb73wk3ofqis.jpg",
        _id: {
          $oid: "64d890214a214b6feb274500",
        },
      },
      {
        public_id: "ags3orubcz6e5qj40b0y",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691916144/ags3orubcz6e5qj40b0y.jpg",
        _id: {
          $oid: "64d897714a214b6feb27450a",
        },
      },
    ],
  },
  {
    _id: "64d88c824a214b6feb2744e8",
    name: "latest Furniture 2",
    description: "this is the latest products to buy 2 ....",
    price: 1000,
    stock: 5,
    images: [
      {
        public_id: "qsdcnm2bib7usjtm2srb",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
        _id: {
          $oid: "64d88c824a214b6feb2744e9",
        },
      },
    ],
  },
  {
    _id: "64d88c824a2dsd14dsdb6feb2744e8",

    name: "latest Furniture 2",
    description: "this is the latest products to buy 2 ....",
    price: 1000,
    stock: 5,
    images: [
      {
        public_id: "qsdcnm2bib7usjtm2srb",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
        _id: {
          $oid: "64d88c824a214b6feb2744e9",
        },
      },
    ],
  },
  {
    _id: {
      $oid: "64d88c824a2dsd14b6feb2744e0",
    },
    name: "latest Furniture 2",
    description: "this is the latest products to buy 2 ....",
    price: 1000,
    stock: 5,
    images: [
      {
        public_id: "qsdcnm2bib7usjtm2srb",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
        _id: {
          $oid: "64d88c824a214b6feb2744e9",
        },
      },
    ],
  },
  {
    _id: "64d88c824a214b6fdsdeb2744e9",
    name: "latest Furniture 2",
    description: "this is the latest products to buy 2 ....",
    price: 1000,
    stock: 5,
    images: [
      {
        public_id: "qsdcnm2bib7usjtm2srb",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
        _id: {
          $oid: "64d88c824a214b6feb2744e9",
        },
      },
    ],
  },
  {
    _id: "64d88c824a214dsdsb6feb2744e8",
    name: "latest Furniture 2",
    description: "this is the latest products to buy 2 ....",
    price: 1000,
    stock: 5,
    images: [
      {
        public_id: "qsdcnm2bib7usjtm2srb",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
        _id: {
          $oid: "64d88c824a214b6feb2744e9",
        },
      },
    ],
  },
  {
    _id: "64d88c824adsds214b6feb2744e8",

    name: "latest Furniture 2",
    description: "this is the latest products to buy 2 ....",
    price: 1000,
    stock: 5,
    images: [
      {
        public_id: "qsdcnm2bib7usjtm2srb",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
        _id: {
          $oid: "64d88c824a214b6feb2744e9",
        },
      },
    ],
  },
  {
    _id: {
      $oid: "64d88c824a214b6feb2744e0",
    },
    name: "latest Furniture 2",
    description: "this is the latest products to buy 2 ....",
    price: 1000,
    stock: 5,
    images: [
      {
        public_id: "qsdcnm2bdsdsib7usjtm2srb",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
        _id: {
          $oid: "64d88c824a214b6feb2744e9",
        },
      },
    ],
  },
  {
    _id: "64d88c824a214b6feb2744e9",
    name: "latest Furniture 2",
    description: "this is the latest products to buy 2 ....",
    price: 1000,
    stock: 5,
    images: [
      {
        public_id: "qsdcnm2bibssds7usjtm2srb",
        url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
        _id: {
          $oid: "64d88c824a214b6feb2744e9",
        },
      },
    ],
  },
];

const AdminGetAllProducts = () => {
  const isLoading = false;
  const navigation=useNavigation();
  const [toggle, setToggle] = useState(false);
  const [indexData, setIndexData] = useState(null);

  const setToggleHandler = (_id) => {
    const indexData = products.findIndex(
      (item) => item._id.toString() === _id.toString()
    );

    if (indexData === -1) {
      return;
    }
    setIndexData(indexData);
    setToggle(!toggle);
  };

   const handleDateProduct=(id)=>{

    Alert.alert("Are you want to delete product ...");
   }

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Header1 headertext="All Products" />
      <View className="bg-color1 mx-3 flex-row  rounded-t-lg">
        <Text className="flex-1 text-center   px-1 py-3 text-white">Image</Text>
        <Text className="flex-1 text-center   px-1 py-3 text-white">Price</Text>
        <Text className="flex-1 text-center   px-1 py-3 text-white">Name</Text>
        <Text className="flex-1 text-center   px-1 py-3 text-white">
          Category
        </Text>
        <Text className="flex-1 text-center   px-1 py-3 text-white">Stock</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading === true ? (
          <View>Loading</View>
        ) : (
          products?.map((item, index) => (
            <>
              <TouchableOpacity
                key={index}
                onPress={() => setToggleHandler(item._id)}
                activeOpacity={0.8}
                className="transition duration-200 delay-100"
              >
                <View className="bg-gray-200 mx-3 flex-row my-2 p-2">
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
                    numberOfLines={2}
                    className="flex-1 text-center  text-[10px]  px-1 py-3"
                  >
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
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
                    id:item._id
                  } 
                  )}
                   className="px-3 py-2 bg-gray-400 rounded-full"
                 >
                    <Text className="text-[10px] text-white">Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=>handleDateProduct(item.id)}                
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
