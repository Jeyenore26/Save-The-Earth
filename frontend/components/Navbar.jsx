import React from 'react'
import {Text, View } from 'react-native';

function Navbar() {
  return (
   <>
  <View className="h-14 relative print:hidden">
    <View className="shadow-b fixed w-screen flex items-center bg-base h-14 z-50">
      <View className="container w-full flex justify-between items-center">
        <View className="flex justify-center items-center gap-2">
          <Text className ='justify-center align-center'>
              sss
          </Text>
        </View>
      </View>
    </View>
  </View>
   </>
  )
}

export default Navbar