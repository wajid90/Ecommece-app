import {
  View,
  Text,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import Header1 from "../components/Header1";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
import { Button } from "react-native-paper";

const categories = [
  { category: "furniture 1", _id: "1" },
  { category: "furniture 2", _id: "2" },
  { category: "furniture 3", _id: "3" },
  { category: "furniture 4", _id: "4" },
  { category: "furniture 5", _id: "5" },
  { category: "furniture 6", _id: "6" },
  { category: "furniture 7", _id: "7" },
  { category: "furniture 5", _id: "8" },
  { category: "furniture 6", _id: "9" },
  { category: "furniture 7", _id: "10" },
];

const categorySchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Provide the Valid Name")
    .required("This field is required"),  
});
const AdminAddCategory = () => {
  const isLoading = false;
  const navigation=useNavigation();
  const [toggle, setToggle] = useState(false);
  const [indexData, setIndexData] = useState(null);

  const setToggleHandler = (_id) => {
    const indexData = products.findIndex(
      (item) => item._id.toString() === _id.toString()
    );

    if (indexData === -1) {
      return;
    }
    setIndexData(indexData);
    setToggle(!toggle);
  };

   const handleDeleteProduct=(id)=>{

    Alert.alert("Are you want to delete product ...");
   }
   const handleUpdateProduct=(id)=>{

    Alert.alert("Are you want to delete product ...");
   }


   
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      
        flex: 1,
      }}
      className="bg-gray-200"
    >
      <Header1 headertext="All Categories" />

      <ScrollView showsVerticalScrollIndicator={false}
      >
        {isLoading === true ? (
          <View>Loading</View>
        ) : (
        <View className="mx-2 flex-1 mb-[160px]">
          {
              categories?.map((item, index) => (
                <>
    
                    <View className="bg-white mx-3 flex-row my-2 p-2 rounded-lg" key={index}>
                    
                      <Text
                       
                        className="flex-1 px-5 text-[14px]   py-3"
                      >
                        {item.category}
                      </Text>
                    
                <View className="flex-row">
                <TouchableOpacity
                    onPress={() => handleUpdateProduct(item._id)}
                    activeOpacity={0.8}
                    className="transition duration-200 delay-100 px-3 pt-2 rounded-full  mr-2 "
                  >
                   <AntDesign name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleDeleteProduct(item._id)}
                    activeOpacity={0.8}
                    className="transition duration-200 delay-100 px-3 pt-2 rounded-full "
                  >
                     <AntDesign name="delete" size={16} color="black" />
                </TouchableOpacity>

           
                </View>
                    </View>
                 
                </>
              ))
          }
        </View>
        )}
       
      </ScrollView>
      <View
          className="absolute bottom-0 left-0 w-full bg-white h-[160px] flex-1"
        >
          <Formik
            initialValues={{
              name: "",
            }}
            validationSchema={categorySchema}
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
     <View className="w-full mt-4">
                <View className="w-full">
                    <Text className="w-full ml-5 text-xs">Category Name</Text>

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
                        placeholder="Enter Category Name .."
                        onFocus={() => setFieldTouched("name")}
                        value={values.name}
                        onChangeText={handleChange("name")}
                        onBlur={() => setFieldTouched("name", "")}
                        autoCapitalize="none"
                        autoCorrect={false}
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
                </View>

              <TouchableOpacity
                 onPress={handleSubmit}
                 activeOpacity={0.8}
                 className="transition-transform active:scale-90"
              >
                <Button
                 className="px-4 py-2 bg-black/[400] mx-4 my-1  rounded-full "
                 textColor="white"
                
                 
               >
                  Add Category
                </Button>
              </TouchableOpacity>
               
              </>
            )}
          </Formik>
        </View>
    </View>
  );
};


export default AdminAddCategory