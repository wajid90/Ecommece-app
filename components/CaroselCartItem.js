import { View, Dimensions ,Image} from 'react-native'
import React from 'react'

const SLIDER_WIDTH=Dimensions.get("window").width;


const CaroselCartItem = ({item,index}) => {
  return (
    <View
       key={index}
       style={{
        width:SLIDER_WIDTH,
        height: 250,
        borderRadius:10,
        marginBottom:20,
       }}
    >
     <Image
       source={{uri:item.url}}
       style={{
        width:SLIDER_WIDTH-40,
        height:250,
        resizeMode:"cover",
        borderRadius:10,
        marginHorizontal:20,
        marginTop:10,
        
    }}
    
     />
     
    </View>
  )
}

export default CaroselCartItem