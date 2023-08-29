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
import { AuthLogin } from "../redux/Auth/userSlice";
import { useDispatch} from "react-redux";
import useCustomHook from "../components/CustomHook";

const LoginPage = ({ navigation }) => {
  const [obsecureText, useObsecureText] = useState(true);

  const dispatch=useDispatch();

  const isLoadding=useCustomHook(navigation,dispatch,"profile");

  const signInSchma = Yup.object().shape({
    email: Yup.string()
      .email("Please Enter the Valid Email ...")
      .required("Please Enter your Email")
      .required("Email is Requied .."),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View className="relative w-full bg-white">
          <Image
            source={require("../assets/sign-concept-illustration_114360-125.png")}
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
            className="w-[90%] flex-row justify-between mx-4 my-2"
          >
          </View>
          <Text className="text-center font-bold text-gray-500 text-xl -mt-4">
            Login 
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={signInSchma}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              dispatch(AuthLogin(values));
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
                  <View className="w-full mt-1 mb-2">
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
                  <View className="w-full  mb-2">
                    <Text className="w-full ml-5">Password</Text>
                    <View className="flex-row  items-center mx-4 my-2 p-4 bg-gray-200  shadow-lg rounded-lg">
                      <MaterialCommunityIcons
                        name="lock-outline"
                        size={24}
                        color="gray"
                        style={{
                          marginRight: 10,
                        }}
                      />
                      <TextInput
                        secureTextEntry={obsecureText}
                        placeholder="Enter Your Password .."
                        onFocus={() => setFieldTouched("password")}
                        value={values.password}
                        onChangeText={handleChange("password")}
                        onBlur={() => setFieldTouched("password", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{
                          flex: 1,
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => useObsecureText(!obsecureText)}
                      >
                        <MaterialCommunityIcons
                          name={
                            obsecureText ? "eye-outline" : "eye-off-outline"
                          }
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    <View className="w-[90%] mx-5">
                      {touched.password && errors.password && (
                        <Text className="text-xs -mt-2 text-red-700">
                          {errors.password}
                        </Text>
                      )}
                    </View>
                    <View className="w-[90%] flex-row items-end justify-between mx-5">
                    <TouchableOpacity 
                      onPress={()=>navigation.navigate("changePassword")}
                    >
                      <Text className="text-blue-400 text-[12px]">change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>navigation.navigate("forgetPassword")}
                    >
                      <Text className="text-blue-400 text-[12px]">Forget Password</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>

              <TouchableOpacity
              
                onPress={handleSubmit}
               
              >
                <Button
                loading={isLoadding}
                 className="px-4 py-2 bg-black/[400] mx-4 my-2 rounded-full "
                 textColor={`${!isValid ? "black":"white"}`}
                 style={{
                  backgroundColor:`${!isValid ? "gray":"black"}`
                  
                }}
                 
               >
                  Login
                </Button>
              </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}
                 activeOpacity={0.9}
                >
                <Button
                 className="px-4 py-2 bg-color1 mx-4  rounded-full "
                 textColor="white"
               >
                  Register
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

export default LoginPage;