// app/navigation/AppNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../(screens)"; // Adjust based on your actual structure
import Following from "../(screens)/following";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={Index} />
      <Stack.Screen name="following" component={Following} />
    </Stack.Navigator>
  );
}
