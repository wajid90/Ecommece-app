import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Platform ,StatusBar} from 'react-native'
import { Image } from "react-native";
import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native'

const UpdateProfile = ({route}) => {
  const navigation=useNavigation();
  
  const [image,setImage]=useState("");


  useEffect(()=>{
    if(route.params?.image) setImage(route.params?.image);
 },[route.params])


  const updateProfileSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Provide the Valid Name")
      .required("This field is required"),
    location: Yup.string()
      .min(3, "Provide the Valid Location")
      .required("This field is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "Password ahould contain at least one uppercase and lowercase character"
      )
      .matches(/\d/, "Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "Password should contain at least one special character"
      ),
      city:Yup.string().required("city feild is required ..."),
      pinCode:Yup.number().required("city pinCode is required ..."),
      country:Yup.string().required("country Filed is required ...")
  });

  const [obsecureText, useObsecureText] = useState(true);


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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View className="flex-row justify-between items-center mx-4 my-2">

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Avatar.Icon
            size={40}
            icon="arrow-left"
            color="black"
            className="bg-transparent"
          />
        </TouchableOpacity>
        <Text>Update Profile</Text>

        <TouchableOpacity >
          <Avatar.Icon
            size={40}
            icon="content-save-settings-outline"
            color="black"
            className="bg-transparent"
          />
        </TouchableOpacity>
      </View>
   
      <View className="w-[100%] h-[160px]  mx-2 flex-row justify-center">
        <View className="w-[40%] h-[160px] mt-2">
          <Image
           source={image?{uri:image}:require("../assets/pexels-photo-220453.webp")}
      
            style={{
              width: "100%",
              height: "90%",
              objectFit: "cover"
            }}
            className="rounded-full relative"
          />
        </View>
        <View
          style={{

            zIndex: 10,
            backgroundColor: "black",
            position: "absolute",
            bottom: 16,
            right: 110,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "white"
          }}
        >
          <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.navigate("camera",{
                 updateProfile:true
                })}
                        
          >
            <Avatar.Icon
              icon="camera"
              size={23}

            />
          </TouchableOpacity>

        </View>
        </View>
       
        <Formik
            initialValues={{
              name: "",
              email: "",
              location: "",
              password: "",
              city:"",
              pinCode:"",
              country:""
            }}
            validationSchema={updateProfileSchema}
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
                <View className="w-full mt-2">
                  <View className="w-full">
                    <Text className="w-full ml-5 text-xs">UserName</Text>

                    <View className="flex-row items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                      <MaterialCommunityIcons
                        name="face-man-profile"
                        size={24}
                        color="gray"
                        style={{
                          marginRight: 10,
                        }}
                      />
                      <TextInput
                        type="name"
                        name="name"
                        placeholder="Enter Your Name .."
                        onFocus={() => setFieldTouched("name")}
                        value={values.name}
                        onChangeText={handleChange("name")}
                        onBlur={() => setFieldTouched("name", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{
                          width:"100%"
                        }}
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
                    <Text className="w-full ml-5 text-xs">Email</Text>
                    <View className="flex-row items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={24}
                        color="gray"
                        style={{
                          marginRight: 10,
                        }}
                      />
                      <TextInput
                        type="email"
                        name="email"
                        placeholder="Enter Your Email .."
                        onFocus={() => setFieldTouched("email")}
                        value={values.email}
                        onChangeText={handleChange("email")}
                        onBlur={() => setFieldTouched("email", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{
                          width:"100%"
                        }}
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
                  <View className="w-full">
                    <Text className="w-full ml-5 text-xs">Address</Text>
                    <View className="flex-row items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                    <Entypo name="address" size={17}  color="gray"
                        style={{
                          marginRight: 10,
                        }} />
                    
                      <TextInput
                        placeholder="Enter Your location .."
                        onFocus={() => setFieldTouched("location")}
                        value={values.location}
                        onChangeText={handleChange("location")}
                        onBlur={() => setFieldTouched("location", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        focusable
                        style={{
                          width:"100%"
                        }}
                      />
                    </View>
                    <View className="w-[90%] mx-5">
                      {touched.location && errors.location && (
                        <Text className="text-xs -mt-2 text-red-700">
                          {errors.location}
                        </Text>
                      )}
                    </View>
                  </View>

                  <View className="w-full">
                    <Text className="w-full ml-5 text-xs">Password</Text>
                    <View className="flex-row  items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
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
                  </View>
                  <View className="w-full">
                    <Text className="w-full ml-5 text-xs">City</Text>
                    <View className="flex-row  items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                    <FontAwesome5 name="city" size={17}   color="gray"
                        style={{
                          marginRight: 10,
                        }} />
                      <TextInput
                        secureTextEntry={obsecureText}
                        placeholder="Enter Your city .."
                        onFocus={() => setFieldTouched("city")}
                        value={values.city}
                        onChangeText={handleChange("city")}
                        onBlur={() => setFieldTouched("city", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{
                          flex: 1,
                        }}
                      />
                     
                    </View>
                    <View className="w-[90%] mx-5">
                      {touched.city && errors.city && (
                        <Text className="text-xs -mt-2 text-red-700">
                          {errors.city}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View className="w-full">
                    <Text className="w-full ml-5 text-xs">Zip Code</Text>
                    <View className="flex-row  items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                    <Entypo name="location-pin" size={17} color="gray"
                        style={{
                          marginRight: 10,
                        }}/>
                      
                      <TextInput
                        secureTextEntry={obsecureText}
                        placeholder="Enter Your pinCode .."
                        onFocus={() => setFieldTouched("pinCode")}
                        value={values.pinCode}
                        onChangeText={handleChange("pinCode")}
                        onBlur={() => setFieldTouched("pinCode", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{
                          flex: 1,
                        }}
                      />
                    </View>
                    <View className="w-[90%] mx-5">
                      {touched.pinCode && errors.pinCode && (
                        <Text className="text-xs -mt-2 text-red-700">
                          {errors.pinCode}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View className="w-full">
                    <Text className="w-full ml-5 text-xs">Country</Text>
                    <View className="flex-row  items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                    <Entypo name="location" size={17}  color="gray"
                        style={{
                          marginRight: 10,
                        }} />
                     
                      <TextInput
                        secureTextEntry={obsecureText}
                        placeholder="Enter Your country .."
                        onFocus={() => setFieldTouched("country")}
                        value={values.country}
                        onChangeText={handleChange("country")}
                        onBlur={() => setFieldTouched("country", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{
                          flex: 1,
                        }}
                      />
                      
                    </View>
                    <View className="w-[90%] mx-5">
                      {touched.country && errors.country && (
                        <Text className="text-xs -mt-2 text-red-700">
                          {errors.country}
                        </Text>
                      )}
                    </View>
                  </View>
                
                </View>
                <TouchableOpacity
                   onPress={isValid ? handleSubmit : inValidForm}
                   activeOpacity={0.9}
                >
                <Button
                 className="px-4 py-2 bg-color1 mx-4 my-3 rounded-full "
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


        </View>
        </ScrollView>
        
  )
}

export default UpdateProfile