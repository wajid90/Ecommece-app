import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModel from "./SearchModel";
import ProductCard from "../components/ProductCart";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const Home = () => {
  const [category, setCategory] = useState("1");
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const navigation = useNavigation();
  const categoryHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id) => {
    console.log("add to cart" + id);
  };

  const categories = [
    { category: "furniture 1", _id: "1" },
    { category: "furniture 2", _id: "2" },
    { category: "furniture 3", _id: "3" },
    { category: "furniture 4", _id: "4" },
    { category: "furniture 5", _id: "5" },
    { category: "furniture 6", _id: "6" },
    { category: "furniture 7", _id: "7" },
  ];

  const products = [
    {
      _id: "64d88c194a214b6feb2744e4",
      name: "latest Furniture",
      description: "this is the latest products to buy ....",
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
      _id: {
        $oid: "64d88c824a214b6feb2744e8",
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
      _id: {
        $oid: "64d88c824a214b6feb2744e0",
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
      _id: "64d88c824a214b6feb2744e9",
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
  ];

  return (
    <>
      {activeSearch && (
        <SearchModel
          activeSearchQuery={activeSearchQuery}
          setActiveSearchQuery={setActiveSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          backgroundColor: "white",
        }}
        className="flex-1"
      >
        <Header
          headertext="shopify"
          back={false}
          setActiveSearch={setActiveSearch}
        />

        <View className="bg-white">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 5,
            }}
          >
            {categories.map((item, index) => (
              <Button
                key={index}
                style={{
                  backgroundColor:
                    category === item._id ? "#c70049" : "#E2E8F0",
                }}
                onPress={() => categoryHandler(item._id)}
                className={`my-4 mx-[4]  shadow`}
              >
                <Text
                  className="text-slate-500 text-[12px]"
                  style={{
                    color: category === item._id ? "#fff" : "#000",
                  }}
                >
                  {" "}
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
