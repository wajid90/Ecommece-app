import {
  View,
  Text,
  Platform,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import Header1 from "../components/Header1";
import Carousel from "react-native-snap-carousel";
import CaroselCartItem from "../components/CaroselCartItem";
import { Avatar } from "react-native-paper";
import CartButton from "../components/CartButton";
import Toast from "react-native-toast-message";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductData } from "../redux/Products/productSlice";
import { useIsFocused } from "@react-navigation/native";
import { addToCart } from "../redux/Auth/userSlice";
import Loader from "../components/Loader";
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetaile = ({ route }) => {
  const isCarosel = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const isfocused = useIsFocused();

  const { singleProduct, isLoadding } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProductData(route?.params?.id));
  }, [dispatch, route.params.id, isfocused]);
  
  console.log(singleProduct?.images);
  const incrementHandler = () => {
    if (quantity >= singleProduct?.stock)
      return Toast.show({
        type: "error",
        text1: "Maximum Value Added ...",
      });
    setQuantity((prev) => prev + 1);
  };
  const decrementHandler = () => {
    if (quantity <= 1)
      return Toast.show({
        type: "error",
        text1: "Item Must be more than 1 !",
      });
    setQuantity((prev) => prev - 1);
  };

  const addtoCartHandler = () => {
    if (singleProduct?.stock == 0) {
      Toast.show({
        type: "error",
        text1: "Product Out of Stock .....",
      });
    }
    dispatch(
      addToCart({
        product: singleProduct?._id,
        name: singleProduct?.name,
        stock: singleProduct?.stock,
        price: singleProduct?.price,
        image: singleProduct?.images[0]?.url,
        quantity: quantity,
      })
    );
    Toast.show({
      type: "success",
      text1: "Product Add to cart",
    });
  };
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      {isLoadding ? (
        <Loader />
      ) : (
        <>
          <Header1 />

          <Carousel
            layout="default"
            ref={isCarosel}
            data={singleProduct?.images}
            renderItem={CaroselCartItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
          />

          <View
            style={{
              flex: 1,
              padding: 35,
              marginTop: -320,
              borderTopLeftRadius: 55,
              borderTopRightRadius: 55,
            }}
            className="bg-white"
          >
            <View className="flex-row justify-between items-center mx-2 my-2">
              <Text className="font-bold text-[16px] text-black">
                {singleProduct?.product?.name}
              </Text>
              <Text className="font-bold text-[16px] text-black">
                ₹ {singleProduct?.price}
              </Text>
            </View>
            <View className="mx-2 my-5">
              <Text
                numberOfLines={9}
                style={{
                  letterSpacing: 1,
                  lineHeight: 20,
                  marginVertical: 6,
                }}
                className="text-[14px] text-black"
              >
                {singleProduct?.description}
              </Text>
            </View>

            <View className="flex-row items-center justify-between  my-1">
              <View className="flex-row items-center mx-3">
                <Text className="text-[14px] text-black flex-1">
                  {singleProduct?.product?.quantity}
                </Text>
                <TouchableOpacity onPress={decrementHandler} activeOpacity={9}>
                  <Avatar.Icon
                    icon="minus"
                    color="black"
                    size={27}
                    className="flex-row mr-2 justify-center items-center bg-gray-300"
                  />
                </TouchableOpacity>
                <View className="flex-row  mr-2 justify-center items-center w-7 h-7 rounded-full bg-gray-200">
                  <Text>{quantity}</Text>
                </View>
                <TouchableOpacity activeOpacity={9} onPress={incrementHandler}>
                  <Avatar.Icon
                    icon="plus"
                    color="black"
                    size={27}
                    className="flex-row mr-2 justify-center items-center bg-gray-300"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <CartButton
              title="Add To Cart"
              addtoCartHandler={() => addtoCartHandler()}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ProductDetaile;
