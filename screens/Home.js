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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategories, getAllproducts } from "../redux/Products/productSlice";
import Loader from "../components/Loader";

const Home = () => {
  const [category, setCategory] = useState("1");
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const navigation = useNavigation();

  const {categories,products,isLoadding}=useSelector((state)=>state.products);
  const categoryHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id) => {
    console.log("add to cart" + id);
  };
   
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getAllproducts());
     dispatch(getAllCategories());
  },[dispatch]);

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
           {
             isLoadding ===true ? <Loader/>:<>
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
             </>
           }
          </ScrollView>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products?.products?.length>0 && products.products?.map((item, index) => (
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
