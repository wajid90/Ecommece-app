import { View, Text, Platform,StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header1 from '../components/Header1'
import {useNavigation, useRoute } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from 'react-native-paper'

const ProductImages = ({navigation,route}) => {
    const [images]=useState(route.params.images);
    const [id]=useState(route.params.id);
    const [image,setImage]=useState(null);
    const [imageChanged,setImageChange]=useState(false);

 
     console.log(image);

   const handleDeleteImage=(imageId)=>{
     console.log(imageId);
   }

   useEffect(()=>{
    if(route.params?.image){setImage(route.params?.image);
        setImageChange(true);}
 },[route.params])



  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
    <Header1  headertext="products Images"/>

    <View className="w-[90%] h-[460px] my-3 mx-auto bg-gray-100 p-3 rounded-lg">
        <ScrollView
           showsVerticalScrollIndicator={false}
        >
      {
        images.map((item,index)=>(
            <View className="w-[90%] mx-auto mb-5" key={index}>
            <Image
              source={{uri:item?.url}}
              style={{
                  width:"100%",
                  height:300,
                  resizeMode:"cover",
                 borderRadius:10
              }}
            />
            <View className="w-8 h-8 rounded-full bg-color1 absolute right-2 top-2 flex-row justify-center items-center">
            <TouchableOpacity activeOpacity={0.8}
              onPress={()=>handleDeleteImage(item.public_id)}
            >
            <MaterialCommunityIcons name="delete-outline" size={20} color="white" />
            </TouchableOpacity>
            </View>
          </View>
        ))
      }

        </ScrollView>

    </View>
    <View className="w-full bg-gray-200 flex-1">
      <View className="w-full flex-row">
      <View className="w-[50%] mx-auto h-[120px] bg-white mt-3 rounded-lg ">
      <Image
            source={image!==null?{uri:image}: require("../assets/2895108.jpg")}
            style={{
                width:"100%",
                height:"100%",
                resizeMode:"cover",
               borderRadius:10
            }}
          />
       </View>
       <TouchableOpacity className="bg-white mt-5 rounded-full my-auto p-5 mr-6 transition-transform active:scale-90"
        activeOpacity={0.8}
         onPress={()=>navigation.navigate("camera",{
            updateProduct:true
         })}
       >
       <MaterialCommunityIcons name="camera-outline" size={34} color="black" />
       </TouchableOpacity>
       </View>
     <TouchableOpacity
       className="bg-color1 mt-5 w-[90%] rounded-full mx-auto p-2 mr-6 transition-transform active:scale-90"
     >
        <Button
         textColor='white'
        >
            Set Image
        </Button>
     </TouchableOpacity>
    </View>
    </View>
  )
}

export default ProductImages