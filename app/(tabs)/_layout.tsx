import { View, Text } from 'react-native'
import React from 'react'
import { Stack , Slot} from 'expo-router'
import HeaderNav from '@/components/navigation/HeaderNav'

export default function TabLayout() {
  return (

    <View className='flex-1'>
      <HeaderNav />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent', // Ensure Stack's content doesn't override the parent View
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="following" />
      </Stack>
    </View>





  )
}