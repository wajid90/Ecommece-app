import {
  View,
  Text,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { Avatar, Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import SearchItem from "../components/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { getAdminAllproducts } from "../redux/Products/productSlice";
import { useEffect } from "react";

const SearchModel = ({
  activeSearchQuery,
  setActiveSearchQuery,
  setActiveSearch,
  products
}) => {
  const navigation = useNavigation();
  console.log(products);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        paddingBottom: 50,
      }}
    >
      <Header
        headertext="Search Product"
        setActiveSearch={setActiveSearch}
        back={true}
        setActiveSearchQuery={setActiveSearchQuery}
      />

      <Searchbar
        placeholder="search items .."
        onChangeText={(query) => setActiveSearchQuery(query)}
        value={activeSearchQuery}
        className="bg-slate-200 mx-3 mb-2"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-2 mx-3">
          {products.products?.length>0 && products?.products?.map((i) => (
            <SearchItem
              key={i._id}
              imgSrc={i.images[0]?.url}
              name={i.name}
              price={i.price}
              desc={i.description}
              handler={() =>
                navigation.navigate("productDetails", {
                  id: i._id,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchModel;
