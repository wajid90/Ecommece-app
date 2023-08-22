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
  const [ratio, setRatio] = useState('4:3');  // default is 4:3
  const { height, width } = Dimensions.get('window');
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] =  useState(false);

  


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
    if(route.params?.profileImage){
        return navigation.navigate("profile",{
            image:data.assets[0].uri
        })
    }
    if(route.params?.updateProfile){
        return navigation.navigate("updateProfile",{
            image:data.assets[0].uri
        })
    }else{
        return navigation.navigate("SignUp",{
            image:data.assets[0].uri
        })
    }

  };
  const prepareRatio = async () => {
    let desiredRatio = '4:3'; 
    if (Platform.OS === 'android') {
      const ratios = await camera.getSupportedRatiosAsync();

      let distances = {};
      let realRatios = {};
      let minDistance = null;

      for (const ratio of ratios) {
        const parts = ratio.split(':');
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        const distance = screenRatio - realRatio; 
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      desiredRatio = minDistance;
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );

      setImagePadding(remainder);
      setRatio(desiredRatio);
      setIsRatioSet(true);
    }
  };
  const setCameraReady = async() => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };


  const clickHandler = async() => {

    const data=await camera.takePictureAsync({
        allowsEditing:true,
        aspect:[4,3],
        quality:1
    });

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
    if(route.params?.profileImage){
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
        onCameraReady={setCameraReady}
        ratio={ratio}
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
