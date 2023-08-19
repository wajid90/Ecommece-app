import { View, Text } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { Platform, StatusBar } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const ForgetPassword = ({ navigation }) => {
  const [obsecureText, useObsecureText] = useState(true);


  const isLoadding=false;
  const signInSchma = Yup.object().shape({
    email: Yup.string()
      .email("Please Enter the Valid Email ...")
      .required("Please Enter your Email")
      .required("Email is Requied .."),
 
  });

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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View className="relative w-full bg-white">
          <Image
            source={require("../assets/../assets/confirmed-concept-illustration_114360-516.jpg")}
            style={{
              width: "100%",
              height: 400,
              resizeMode: "contain",
            }}
          />
          <View
            style={{
              position: "absolute",
              top: StatusBar.currentHeight,
              left: 1,
            }}
            className="w-[90%] flex-row justify-between mx-4 my-2 "
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="p-2 flex justify-center items-center  rounded-full w-10 h-10 bg-gray-200"
            >
              <Ionicons size={20} name="chevron-back" color="black" />
            </TouchableOpacity>
          </View>
          <Text className="text-center font-bold text-gray-500 text-xl -mt-2">
            Confirm User Account
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={signInSchma}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
           
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
                <View className="w-full">
                  <View className="w-full mt-10 mb-2">
                    <Text className="w-full ml-5">Email</Text>
                    <View className="flex-row items-center mx-4 my-2 p-4 bg-gray-200  shadow-lg rounded-lg">
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={24}
                        color="gray"
                        style={{
                          marginRight: 10,
                        }}
                      />
                      <TextInput
                        placeholder="Enter Your Email .."
                        onFocus={() => setFieldTouched("email")}
                        value={values.email}
                        onChangeText={handleChange("email")}
                        onBlur={() => setFieldTouched("email", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        className="w-full"
                      />
                    </View>
                    <View className="w-[90%] mx-5">
                      {touched.email && errors.email && (
                        <Text className="text-xs -mt-2 text-red-700">
                          {errors.email}
                        </Text>
                      )}
                    </View>
                  </View>
           
                </View>

              <TouchableOpacity
                onPress={()=>navigation.navigate("resetPassword")}
              >
                <Button
                 className="px-4 py-2 bg-black/[400] mx-4 my-2 rounded-full "
                 textColor="white"
               >
                  Send
                </Button>
              </TouchableOpacity>
               
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgetPassword;