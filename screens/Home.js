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
