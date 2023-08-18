import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const CartButton = ({title,addtoCartHandler}) => {
  return (
    <Button
    
    onPress={addtoCartHandler}
      className="w-full py-2 px-4 mx-3 my-2 bg-black rounded-full"
      icon="cart"
      textColor='white'
       style={{
        elevation:4
       }}
    >
      {title}
    </Button>
  )
}

export default CartButton