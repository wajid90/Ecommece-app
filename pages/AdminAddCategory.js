import {
  View,
  Text,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Header1 from "../components/Header1";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useCustomHook3, useCustomHook5 } from "../components/CustomHook";
import {
  createCategory,
  deleteCategory,
  getAdminAllproducts,
  getAllCategories,
  getAllProductsSlice,
  getAllproducts,
} from "../redux/Products/productSlice";
import { useIsFocused } from "@react-navigation/native";

const categorySchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Provide the Valid Name")
    .required("This field is required"),
});
const AdminAddCategory = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);
  const [indexData, setIndexData] = useState(null);
  const [categoryId,setCateogyId]=useState(null);
  const [categoryName,setCategoryName]=useState("");


  const isFocused=useIsFocused();
  // const {categories,products}=useSelector((state)=>state.products);


  const dispatch = useDispatch();

  const {isLoadding,categories,products} = useCustomHook5(
    dispatch,
    navigation,
    "adminAddCategory",
    getAllCategories
  );


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

  const handleDeleteProduct = (id) => {
    setCateogyId(id);
    Alert.alert("Delete Category","Are you sure you  want to delete a product ...",[
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        
      },
      {text: 'OK', onPress: () => dispatch(deleteCategory(id))},
    ]);
    
  };
  const handleUpdateProduct = (id) => {
    Alert.alert("Are you want to delete product ...");
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

        flex: 1,
      }}
      className="bg-gray-100"
    >
      <Header1 headertext="All Categories" cl={false} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoadding ? (
          <Loader />
        ) : (
          <View className="mx-2 flex-1 mb-[160px]">
            {categories.length > 0 &&
              categories?.map((item, index) => (
                <>
                  <View
                    className="bg-white mx-3 flex-row my-2 p-2 rounded-lg"
                    key={index}
                  >
                    <Text className="flex-1 px-5 text-[14px]   py-3">
                      {item?.category}
                    </Text>

                    <View className="flex-row">
                      <TouchableOpacity
                        onPress={() => handleUpdateProduct(item?._id)}
                        activeOpacity={0.8}
                        className="transition duration-200 delay-100 px-3 pt-2 rounded-full  mr-2 "
                      >
                        <AntDesign name="edit" size={24} color="black" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleDeleteProduct(item?._id)}
                        activeOpacity={0.8}
                        className="transition duration-200 delay-100 px-3 pt-2 rounded-full "
                      >
                        <AntDesign name="delete" size={16} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              ))}
          </View>
        )}
      </ScrollView>
      <View className="absolute bottom-0 left-0 w-full bg-white h-[160px] flex-1">
        <Formik
          initialValues={{
            name: "",
          }}
          
          validationSchema={categorySchema}
          onSubmit={(values, { resetForm }) => {
           
            dispatch(
              createCategory({
                category: values?.name,
              })
            );
           
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
                      type="text"
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
                  textColor={`${!isValid ? "black" : "white"}`}
                  style={{
                    backgroundColor: `${!isValid ? "gray" : "black"}`,
                  }}
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

export default AdminAddCategory;
