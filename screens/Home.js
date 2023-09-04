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
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminAllproducts, getAllCategories, getAllproducts } from "../redux/Products/productSlice";
import Loader from "../components/Loader";
import Toast  from "react-native-toast-message";
import { addToCart } from "../redux/Auth/userSlice";
import ProductSmallCart from "../components/ProductSmallCart";

const Home = () => {
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const [activeSearch, setActiveSearch] = useState(false);
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const navigation = useNavigation();

  const {categories,products,isLoadding}=useSelector((state)=>state?.products);
  const categoryHandler = (catId,catName) => {
    setCategoryName(catName);
    setCategory(catId)
  };
  const isfocused=useIsFocused();
  const addToCartHandler = ({id,name,stock,price,image}) => {
   
    if(stock==0){
      Toast.show({
        type:"error",
        text1:"Product Out of Stock ....."
      })
    }
      dispatch(addToCart({
          product:id,
          name:name,
          stock:stock,
          price:price,
          image:image,
          quantity:1
      }));
      Toast.show({
        type:"success",
        text1:"Product Add to cart"
      })
  };
   
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllCategories());
 },[isfocused]);
// dispatch(getAllproducts());
  useEffect(()=>{
     const data=setTimeout(()=>{
      dispatch(getAdminAllproducts({
        keyword:activeSearchQuery,
        category:category
      }));
    },500);

    return ()=> clearInterval(data);
  },[dispatch,activeSearchQuery,category,isfocused]);



  return (
    <>
      {activeSearch && (
        <SearchModel
          activeSearchQuery={activeSearchQuery}
          setActiveSearchQuery={setActiveSearchQuery}
          setActiveSearch={setActiveSearch}
          category={category}
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
                onPress={() => categoryHandler(item?._id,item?.category)}
                className={`my-4 mx-[4]  shadow`}
              >
                <Text
                  className="text-slate-500 text-[12px]"
                  style={{
                    color: category === item?._id ? "#fff" : "#000",
                  }}
                >
                  {" "}
                  {item?.category}
                </Text>
              </Button>
            ))}
             </>
           }
          </ScrollView>
        </View>

        <View>

        <ScrollView  showsVerticalScrollIndicator={false} 
         
        >
        <View className="flex-row mx-4 my-3 justify-between items-center">
                <Text className="font-semibold text-[12px]">Latest products</Text>
                <Text className="font-semibold text-[12px]">See More</Text>
            </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {products?.products?.length>0 && products.products?.map((item, index) => (

              item.feature==="Latest products" && <ProductCard
                stock={item?.stock}
                name={item?.name}
                price={item?.price}
                image={item?.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item?._id}
                key={item?._id}
                i={index}
                navigation={navigation}
              />
              
            ))}
          </ScrollView>
           

           <View>
            <View className="flex-row mx-4 my-3 justify-between items-center">
                <Text className="font-semibold text-[12px]">special Products</Text>
                <Text className="font-semibold text-[12px]">See More</Text>
            </View>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products?.products?.length>0 && products.products?.map((item, index) => (
              item.feature==="special Products" &&  <ProductSmallCart
                stock={item?.stock}
                name={item?.name}
                price={item?.price}
                image={item?.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item?._id}
                key={item?._id}
                i={index}
                navigation={navigation}
              />
            ))}
          </ScrollView>
           </View>

           <View >
           <View className="flex-row mx-4 my-3 justify-between items-center">
                <Text className="font-semibold text-[12px]">Famous Products</Text>
                <Text className="font-semibold text-[12px]">See More</Text>
            </View>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products?.products?.length>0 && products.products?.map((item, index) => (
              item.feature==="Famous Products" &&  <ProductSmallCart
                stock={item?.stock}
                name={item?.name}
                price={item?.price}
                image={item?.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item?._id}
                key={item?._id}
                i={index}
                navigation={navigation}
              />
            ))}
          </ScrollView>
           </View>
           <View>
           <View className="flex-row mx-4 my-3 justify-between items-center">
                <Text className="font-semibold text-[12px]">All Products</Text>
                <Text className="font-semibold text-[12px]">See More</Text>
            </View>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products?.products?.length>0 && products.products?.map((item, index) => (
               <ProductSmallCart
                stock={item?.stock}
                name={item?.name}
                price={item?.price}
                image={item?.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item?._id}
                key={item?._id}
                i={index}
                navigation={navigation}
              />
            ))}
          </ScrollView>
           </View>
           <View>
           <View className="flex-row mx-4 my-3 justify-between items-center">
                <Text className="font-semibold text-[12px]">Check Products</Text>
                <Text className="font-semibold text-[12px]">See More</Text>
            </View>
           
            {products?.products?.length>0 && products.products?.map((item, index) => (
               <ProductCard
                stock={item?.stock}
                name={item?.name}
                price={item?.price}
                image={item?.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item?._id}
                key={item?._id}
                i={index}
                navigation={navigation}
              />
            ))}
          
           </View>
          </ScrollView>
        </View>

      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};
export default Home;
