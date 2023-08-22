import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { Platform, StatusBar } from "react-native";
import { Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import { Avatar, Button } from "react-native-paper";
import ProductModel from "../components/productModel";
// import { launchImageLibrary } from "react-native-image-picker";

const productSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Provide the Valid Name")
    .required("This field is required"),
  description: Yup.string()
    .min(4, "Provide the Valid Description")
    .required("This field is required"),
  price: Yup.number()
    .required("This field is required"),
  stock: Yup.number()
    .required("This field is required"),

    
});

const AdminUpdateProduct = ({ navigation }) => {
  const [obsecureText, useObsecureText] = useState(false);

  const [category,setCategory]=useState(null);

  console.log(obsecureText);


  const isLoadding=false;

  const inValidForm = () => {
    Alert.alert("Invaid Form", "Please Provide All required Fields ...", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Continue",
        onPress: () => {},
      },
    ]);
  };
  console.log(category);

  return (
    <ScrollView showsVerticalScrollIndicator={false} 
      contentContainerStyle={{
        backgroundColor:"white"
      }}
    >
      <SafeAreaView>
        <View className="relative w-full bg-white mt-10">
         <View className="w-[90%] h-[280px] mx-auto mt-2  rounded-lg flex-row justify-center items-center bg-gray-200 my-8"

         >
         <Image
            source={require("../assets/sign-up-concept-illustration_114360-7865.jpg")}
            style={{
              width: "70%",
              height: 200,
              resizeMode: "contain",
              backgroundColor:"black",  
              
            }}
            className="rounded-lg"
          />
          <View className="rounded-full w-10 h-10 bg-green-500 absolute bottom-8 right-10 flex-row justify-center items-center">
          <TouchableOpacity
           activeOpacity={0.8}
          >
          <Ionicons name="add-circle-outline" size={24} color="white" />
          </TouchableOpacity>
          </View>
         </View>
          <View
            style={{
              position: "absolute",
              top: StatusBar.currentHeight-30,
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
          {/* <Text className="text-center font-bold text-gray-500 text-xl -mt-5 mb-3">
            Unilimited Luxurius Furniture{" "}
          </Text> */}
          <Formik
            initialValues={{
              name: "",
              description: "",
              price: "",
              stock: "",
              category:"",
            }}
            validationSchema={productSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              dispatch(AuthRegister(values));
              // setTimeout(() => {
              //   resetForm();
              // }, 200);
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
                    <View className="flex-row items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                    
                      <TextInput
                        type="number"
                        name="price"
                        placeholder="Enter Your Price .."
                        onFocus={() => setFieldTouched("price")}
                        value={values.email}
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
                    <View className="flex-row items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                     
                      <TextInput
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
                  <View className="w-full">
                  <TouchableOpacity
                        onPress={() => useObsecureText(true)}
                      >
                    <View className="flex-row  items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                    
                       <Button className="w-full"  textColor="gray">
                         Select Category
                       </Button>
                    
                    </View>
                    </TouchableOpacity>
                    <View className="w-[90%] mx-5">
                      {category===null && (
                        <Text className="text-xs -mt-2 text-red-700">
                          {errors.stock}
                        </Text>
                      )}
                    </View>
                  </View>

                </View>
                <TouchableOpacity
                   onPress={isValid ? handleSubmit : inValidForm}
                   activeOpacity={0.9}
                   contentContainerStyle={{
                    width:"100%"
                   }}
                >
                <Button
                 className="px-4 py-1 bg-color1 mx-4 my-1 rounded-full"
                 textColor="white"
                 isValid={isValid}
               
                  lodder={isLoadding}
               >
                  Update
                </Button>
              </TouchableOpacity>
              </>
            )}
          </Formik>
          

          {
            obsecureText && <ProductModel useObsecureText={useObsecureText} setCategory={setCategory} category={category} />
          }
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AdminUpdateProduct;