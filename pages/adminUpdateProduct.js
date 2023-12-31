import { View, Text } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { Platform, StatusBar } from "react-native";
import { Image } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import { Avatar, Button } from "react-native-paper";
import ProductModel from "../components/productModel";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import {
  createProducts,
  getAllproducts,
  getSingleProductData,
  resetState,
  updateSingleProduct,
  updateSingleProductData,
} from "../redux/Products/productSlice";
import mime from "mime";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "react-native-paper-dropdown";
import Loader from "../components/Loader";
import { useCustomHook3 } from "../components/CustomHook";
// import { launchImageLibrary } from "react-native-image-picker";

const productSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Provide the Valid Name")
    .required("This field is required"),
  description: Yup.string()
    .min(4, "Provide the Valid Description")
    .required("This field is required"),
  price: Yup.number().required("This field is required"),
  stock: Yup.number().required("This field is required"),
});

const AdminUpdateProduct = ({ navigation, route }) => {
  const [obsecureText, useObsecureText] = useState(false);
  const { isLoadding, singleProduct,isError,isSuccess,errerMessage,successMessage } = useSelector((state) => state.products);
  const [category, setCategory] = useState(
    singleProduct?.category ? singleProduct?.category : null
  );
  const [showDropDown, setShowDropDown] = useState(false);
  const [featured, setFeatured] = useState(
    singleProduct?.feature ? singleProduct?.feature : ""
  );
  const dispatch = useDispatch();
  const isfocused = useIsFocused();


  const genderList = [
    {
      label: "special Products",
      value: "special Products",
    },
    {
      label: "Famous Products",
      value: "Famous Products",
    },
    {
      label: "Latest products",
      value: "Latest products",
    },
  ];

  const [image, setImage] = useState("");

  // console.log(obsecureText);
  const isLoading = useCustomHook3(
    dispatch,
    navigation,
    "admingetAllproducts"
  );

  useEffect(() => {
    dispatch(getSingleProductData(route?.params?.id));
  }, [dispatch, route?.params, isfocused]);

  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params?.image);
    }
    if (singleProduct !== null) {
      setImage(singleProduct?.images[0]?.url);
    }
  }, [route.params,singleProduct]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: "white",
      }}
    > 
      <SafeAreaView>
        <View className="relative w-full bg-white mt-10">
        {isLoadding ? (
            <Loader />
          ) : (
            <>
          <View className="w-[90%] h-[280px] mx-auto mt-2  rounded-lg flex-row justify-center items-center bg-gray-200 my-8">
            <Image
              source={
                image
                  ? { uri: image }
                  : require("../assets/sign-up-concept-illustration_114360-7865.jpg")
              }
              style={{
                width: "70%",
                height: 200,
                resizeMode: "contain",
                backgroundColor: "black",
              }}
              className="rounded-lg"
            />
            <View className="rounded-full w-8 h-8 bg-black absolute bottom-8 right-10 flex-row justify-center items-center">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("productImages",{
                    id:singleProduct?._id,
                  })}
                
                className="transition-transform active:scale-110"
              >
                <Ionicons name="add-circle-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

              <View
                style={{
                  position: "absolute",
                  top: StatusBar.currentHeight - 30,
                  left: 1,
                }}
                className="w-[90%] flex-row justify-between mx-4 -my-2 "
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="flex justify-center items-center  rounded-full w-8 h-8 bg-gray-200"
                >
                  <Ionicons size={20} name="chevron-back" color="black" />
                </TouchableOpacity>
              </View>

              <Formik
                enableReinitialize={true}
                initialValues={{
                  name: singleProduct?.name || "",
                  description: singleProduct?.description || "",
                  price: singleProduct?.price.toString() || "",
                  stock: singleProduct?.stock.toString() || "",
                }}
               
                validationSchema={productSchema}
                onSubmit={(values, { resetForm }) => {
                  if (category === null) {
                    return Toast.show({
                      type: "error",
                      text1: "Category is Required ...",
                    });
                  }
                  if (featured === "") {
                    return Toast.show({
                      type: "error",
                      text1: "featured is Required ...",
                    });
                  }
                  dispatch(updateSingleProductData({id:route?.params?.id,formData:{
                    ...values,
                    feature:featured
                  }}));
                
                  setTimeout(() => {
                    resetForm();
                  }, 200);
                }}
                className="flex flex-column gap-15"
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldTouched,
                  isValid,
                  /* and other goodies */
                }) => (
                  <>
                    <View className="w-full -mt-6">
                      <View className="w-full">
                        <View className="flex-row items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                          <TextInput
                            type="text"
                            name="name"
                            placeholder="Enter Your product Name .."
                            onFocus={() => setFieldTouched("name")}
                            value={values.name}
                            onChangeText={handleChange("name")}
                            onBlur={() => setFieldTouched("name", "")}
                            autoCapitalize="none"
                            autoCorrect={false}
                            className="w-full py-1"
                          />
                        </View>
                        <View className="w-[90%] mx-5">
                          {touched.name && errors.name && (
                            <Text className="text-xs -mt-2 text-red-700">
                              {errors.name}
                            </Text>
                          )}
                        </View>
                      </View>
                      <View className="w-full">
                        <View className="flex-row items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                          <TextInput
                            type="text"
                            name="description"
                            placeholder="Enter Your product description .."
                            onFocus={() => setFieldTouched("description")}
                            value={values.description}
                            onChangeText={handleChange("description")}
                            onBlur={() => setFieldTouched("description", "")}
                            autoCapitalize="none"
                            autoCorrect={false}
                            className="w-full py-1"
                          />
                        </View>
                        <View className="w-[90%] mx-5">
                          {touched.description && errors.description && (
                            <Text className="text-xs -mt-2 text-red-700">
                              {errors.description}
                            </Text>
                          )}
                        </View>
                      </View>
                         <View className="w-full">
                        <TouchableOpacity onPress={() => useObsecureText(true)}>
                          <View className="flex-row  items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                            <Button className="w-full" textColor="gray">
                              {category !== null
                                ? "Category Selected"
                                : "Please Select Category"}
                            </Button>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View className="w-full">
                        <View className="flex-row items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                          <TextInput
                            type="number"
                            name="price"
                            keyboardType="decimal-pad"
                            placeholder="Enter Your Price .."
                            onFocus={() => setFieldTouched("price")}
                            value={values.price}
                            onChangeText={handleChange("price")}
                            onBlur={() => setFieldTouched("price", "")}
                            autoCapitalize="none"
                            autoCorrect={false}
                            className="w-full py-1"
                          />
                        </View>
                        <View className="w-[90%] mx-5">
                          {touched.price && errors.price && (
                            <Text className="text-xs -mt-2 text-red-700">
                              {errors.price}
                            </Text>
                          )}
                        </View>
                      </View>
                      <View className="w-full">
                        <View className="flex-1 h-[80px] mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                          <DropDown
                            label={""}
                            mode={"outlined"}
                            visible={showDropDown}
                            showDropDown={() => setShowDropDown(true)}
                            onDismiss={() => setShowDropDown(false)}
                            value={featured}
                            setValue={setFeatured}
                            list={genderList}
                            placeholder="Select Your Featured ..."
                            dropDownItemStyle={{
                              backgroundColor: "#edf2f7",
                            }}
                            inputProps={{
                              style: {
                                height: 50,
                                borderColor: "none",
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                              },
                            }}
                            dropDownItemSelectedStyle={{
                              backgroundColor: "#edf2f7",
                            }}
                            dropDownContainerMaxHeight={200}
                            dropDownStyle={{
                              borderColor: "transparent",
                            }}
                            dropDownItemTextStyle={{
                              backgroundColor: "#edf2f7",
                            }}
                            dropDownItemSelectedTextStyle={{
                              color: "black",
                            }}
                          />
                        </View>
                      </View>
                      <View className="w-full">
                        <View className="flex-row items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                          <TextInput
                            keyboardType="decimal-pad"
                            placeholder="Enter Your Stock .."
                            onFocus={() => setFieldTouched("stock")}
                            value={values.stock}
                            onChangeText={handleChange("stock")}
                            onBlur={() => setFieldTouched("stock", "")}
                            autoCapitalize="none"
                            autoCorrect={false}
                            focusable
                            className="w-full py-1"
                          />
                        </View>
                        <View className="w-[90%] mx-5">
                          {touched.stock && errors.stock && (
                            <Text className="text-xs -mt-2 text-red-700">
                              {errors.stock}
                            </Text>
                          )}
                        </View>
                      </View>
                   
                    </View>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      disabled={!isValid}
                      activeOpacity={0.9}
                    >
                      <Button
                        className="px-4 py-2 bg-color1 mx-4 my-1 rounded-full "
                        isValid={isValid}
                        loading={isLoading}
                        textColor={`${!isValid ? "black" : "white"}`}
                        style={{
                          backgroundColor: `${!isValid ? "gray" : "#c70049"}`,
                        }}
                      >
                        Update Product
                      </Button>
                    </TouchableOpacity>
                  </>
                )}
              </Formik>
            </>
          )}
          {obsecureText && (
            <ProductModel
              useObsecureText={useObsecureText}
              setCategory={setCategory}
              category={category}
            />
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AdminUpdateProduct;
