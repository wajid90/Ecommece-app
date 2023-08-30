import { View, Text, TouchableOpacity, Platform, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Avatar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "react-native";


const CameraScreen = ({navigation,route}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [imagePath,setImagePath]=useState("");
  const [imagePadding, setImagePadding] = useState(0);

  


  console.log(type);

  const toggleCameraType=()=> {
    setType((type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
  }


  const openImagePicker = async () => {
    const permissionResult=await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(permissionResult.granted===false){
        return alert("Permission To access gallery is rejected...");
    }
    const data=await ImagePicker.launchImageLibraryAsync();
    console.log(data);
    if(route.params?.newProduct){
        return navigation.navigate("adminaddProduct",{
            image:data.assets[0].uri
        })
    }
    if(route.params?.updateProduct){
        return navigation.navigate("productImages",{
            image:data.assets[0].uri
        })
    }
    if(route.params.updateProfile){
        return navigation.navigate("profile",{
            image:data.assets[0].uri
        })
    }
    if(route.params.updateProfile){
        return navigation.navigate("updateProfile",{
            image:data.assets[0].uri
        })
    }else{
        return navigation.navigate("SignUp",{
            image:data.assets[0].uri
        })
    }

  };

  const clickHandler = async() => {

    const data=await camera.takePictureAsync();

    console.log(data);
    if(route.params?.newProduct){
        return navigation.navigate("adminaddProduct",{
            image:data.uri
        })
    }
    if(route.params?.updateProduct){
        return navigation.navigate("productImages",{
            image:data.uri
        })
    }
    if(route.params?.updateProfile){
        return navigation.navigate("profile",{
            image:data.uri
        })
    }
    if(route.params?.updateProfile){
        return navigation.navigate("updateProfile",{
            image:data.uri
        })
    }else{
        return navigation.navigate("SignUp",{
            image:data.uri
        })
    }

  }

  useEffect(()=>{
   (async()=>{
    const {status}=await Camera.requestCameraPermissionsAsync();
    setHasPermission(status==="granted");
   })();
  },[]);

  if(hasPermission===null) <View/>
  if(hasPermission===false) return <View  style={{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
    flex: 1,
  }} ><Text>No access to camera</Text></View>


  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Camera
      type={type}
        style={{
          flex: 1,
          aspectRatio: 1,
        }}
        ratio={"1:1"}
        ref={(e) => setCamera(e)}
      />
      <View
        style={{
          flexDirection: "row",
          bottom: 10,
          width: "100%",
          justifyContent: "space-evenly",
          position:"absolute",
          bottom:40
        }}
      >
        <MyIcon icon="image" handler={openImagePicker} />
        <MyIcon icon="camera" handler={clickHandler} />
        <MyIcon icon="camera-flip" handler={toggleCameraType} />
      </View>
    </View>
  );
};

const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler} 
    className="transition-transform active:scale-90"
  >
    <Avatar.Icon icon={icon} color="white" size={70}  style={{
        backgroundColor:"transparent"
    }} />
  </TouchableOpacity>
);

export default CameraScreen;
