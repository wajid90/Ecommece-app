import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Toast from 'react-native-toast-message';
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { Platform, StatusBar } from "react-native";
import { Image } from "react-native";
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import mime from "mime";
import { useCustomHook2 } from "../components/CustomHook";
import { updateProfileData, updateProfilePicData, userLoadData } from "../redux/Auth/userSlice";
import { useIsFocused } from "@react-navigation/native";




 const updateSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Provide the Valid Name")
    .required("This field is required"),

  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
   address: Yup.string()
    .min(3, "Provide the Valid Location")
    .required("This field is required"),
   city:Yup.string()
   .min(3, "Provide the Valid Location")
   .required("This field is required"),
   country:Yup.string()
   .min(3, "Provide the Valid Location")
   .required("This field is required"),
   pinCode:Yup.number()
   .required("This field is required"),
  
});

const UpdateProfile = ({navigation,route}) => {
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.auth);
  const [image, setImage] = useState(user?.avatar?.url?user?.avatar?.url:"");
  const isfocused = useIsFocused();
  const isLoaddingPic = useCustomHook2(dispatch, null, null, userLoadData);
  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params?.image);
      const formData = new FormData();
      formData.append("file", {
        uri: image,
        type: mime.getType(image),
        name: image.split("/").pop(),
      });
      dispatch(updateProfilePicData(formData));
    }
  }, [route.params, dispatch, isfocused]);

  const isLoadding=useCustomHook2(dispatch,navigation,"profile",userLoadData);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View className="relative w-full bg-white">
          <View className="w-[100%] h-[160px] my-8  mx-2 flex-row justify-center mt-20">
            <View className="w-[40%] h-[160px] ">
              <Image
                source={
                  image
                    ? { uri: image }
                    : require("../assets/pexels-photo-220453.webp")
                }
                style={{
                  width: "100%",
                  height: "90%",
                  objectFit: "cover",
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
                borderColor: "white",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("camera",{updateProfile:true})
                }
              >
                <Avatar.Icon icon="camera" size={23} />
              </TouchableOpacity>
            </View>
          </View>
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
          <Formik
           enableReinitialize={true}
            initialValues={{
              name: user?.name || '',
              email:user?.email || '',
              address: user?.address || '',
              city: user?.city || '',
              country:user?.country || '',
              pinCode: user?.pinCode || '',
           
            }}  
            validationSchema={updateSchema}
            onSubmit={(values, { resetForm }) => {
               console.log(values);
       
              dispatch(updateProfileData({
                name: values?.name,
                 email: values?.email,
                  address: values?.address,
                   city: values.city,
                    country: values.country,
                     pinCode: values.pinCode
              }));
           
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
                <View className="w-full -mt-10">
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
                        name="name"
                        placeholder="Enter Your Name .."
                        onFocus={() => setFieldTouched("name")}
                        value={values.name}
                        onChangeText={handleChange("name")}
                        onBlur={() => setFieldTouched("name", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{
                          flex: 1,
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
                          flex: 1,
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
                      <Ionicons
                        name="location"
                        size={24}
                        color="gray"
                        style={{
                          marginRight: 10,
                        }}
                      />
                      <TextInput
                        placeholder="Enter Your Address .."
                        onFocus={() => setFieldTouched("address")}
                        value={values.address}
                        onChangeText={handleChange("address")}
                        onBlur={() => setFieldTouched("address", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
                        focusable
                        style={{
                          flex: 1,
                        }}
                      />
                    </View>
                    <View className="w-[90%] mx-5">
                      {touched.address && errors.address && (
                        <Text className="text-xs -mt-2 text-red-700">
                          {errors.address}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View className="w-full">
                    <Text className="w-full ml-5 text-xs">City</Text>
                    <View className="flex-row  items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                    <FontAwesome5 name="city" size={20} color="gray" style={{
                          marginRight: 10,
                        }} />
                      <TextInput
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
                    <Text className="w-full ml-5 text-xs">pin Code</Text>
                    <View className="flex-row  items-center mx-4 my-2 p-2 bg-gray-200  shadow-lg rounded-lg">
                  
                        <AntDesign name="qrcode"  size={20} color="gray" style={{
                          marginRight: 10,
                        }} />
                      <TextInput
                         keyboardType={"number-pad"}
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
                      
                    <Entypo name="location" size={24}
                        color="gray"
                        style={{
                          marginRight: 10,
                        }} />
                     
                      <TextInput
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
                  onPress={handleSubmit}
                  disabled={!isValid}
                  activeOpacity={0.9}
                  className="transition-transform active:scale-95"
                >
                  <Button
                    className="px-4 py-2 bg-color1 mx-4 my-1 rounded-full "
                    loading={isLoadding}
                    textColor={`${!isValid ? "black":"white"}`}
                    style={{
                     backgroundColor:`${!isValid ? "gray":"#c70049"}`
                     
                   }}
                  >
                    Update
                  </Button>
                </TouchableOpacity>
              
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default UpdateProfile