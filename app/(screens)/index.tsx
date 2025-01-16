import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Following from "./following";
import { createStackNavigator } from '@react-navigation/stack';

const TopTab = createMaterialTopTabNavigator();

function TopTabScreen() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#171717" }, // Dark background for top tab bar
        tabBarIndicatorStyle: { backgroundColor: "#ffffff" }, // White indicator color
        tabBarLabelStyle: { color: "#ffffff" }, // White text color for labels
      }}
    >
      <TopTab.Screen name="For You" component={ForYou} />
      <TopTab.Screen name="Following" component={Following} />
    </TopTab.Navigator>
  );
}

function ForYou() {
  return (
    <View className="flex-1 bg-[#171717]">
      
      <View className="mt-10 h-[15vh] border-b-2 border-white">
      <Text className="">For you</Text>
      </View>
      
    </View>
  );
}



const Stack = createStackNavigator();

export default function IndexLayout(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: 'transparent', // Transparent background for stack header
        elevation: 0, // Remove Android shadow
        shadowOpacity: 0, // Remove iOS shadow
      },
      headerTintColor: 'transparent', // Hide any back icon or text
    }}
    >
        <Stack.Screen name="Index" component={TopTabScreen}/>

    </Stack.Navigator>
  )
}