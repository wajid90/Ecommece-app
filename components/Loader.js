import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

const Loader = () => {
  return (
    <View className="flex-row w-screen h-screen justify-center items-center mx-auto my-2">
            <ActivityIndicator size={25} textColor="black" className="text-center"/>
        </View>
  )
}

export default Loader