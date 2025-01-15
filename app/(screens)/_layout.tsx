// app/(screens)/_layout.tsx
import React from "react";
import { SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYou from ".";
import Following from "./following";

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
  return (
    <SafeAreaView className="flex-1 bg-[#171717]">
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "transparent" }, // Transparent tab bar
          tabBarIndicatorStyle: { backgroundColor: "#ffffff" }, // Indicator color
          tabBarLabelStyle: { color: "#ffffff" }, // Label color
        }}
      >
        <Tab.Screen name="For You" component={ForYou} />
        <Tab.Screen name="Following" component={Following} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
