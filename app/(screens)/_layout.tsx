// app/(screens)/_layout.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import ForYou from "."; // Ensure this component is correctly implemented
import Following from "./following"; // Ensure this component is correctly implemented
import LoginScreen from "./LoginScreen"; // Ensure this component is correctly implemented
import { useAuth, AuthProvider } from "./AuthContext"; // Ensure this file exists and is implemented as below

// Create navigators
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// Top Tab Navigator
function TopTabScreen() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#171717" }, // Dark background
        tabBarIndicatorStyle: { backgroundColor: "#ffffff" }, // White indicator
        tabBarLabelStyle: { color: "#ffffff" }, // White text
      }}
    >
      <TopTab.Screen name="For You" component={ForYou} />
      <TopTab.Screen name="Following" component={Following} />
    </TopTab.Navigator>
  );
}

// Bottom Tab Navigator
function BottomTabScreen() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#171717" }, // Dark background
        tabBarActiveTintColor: "#ffffff", // White for active icons
        tabBarInactiveTintColor: "#a1a1a1", // Grey for inactive icons
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TopTabScreen}
        options={{
          tabBarLabelStyle: { display: "none" }, // Hide label
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Find"
        component={TopTabScreen} // Replace with the correct component for "Find"
        options={{
          tabBarLabelStyle: { display: "none" }, // Hide label
          tabBarIcon: ({ color, size }) => <Icon name="search" color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={TopTabScreen} // Replace with the correct component for "Discover"
        options={{
          tabBarLabelStyle: { display: "none" }, // Hide label
          tabBarIcon: ({ color, size }) => <Icon name="compass" color={color} size={size} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Main Navigator with Stack
function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: "transparent",
      }}
    >
      <Stack.Screen name="Root" component={BottomTabScreen} />
    </Stack.Navigator>
  );
}

// App Navigator (handles authentication)
function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <Stack.Screen name="Main" component={MainNavigator} />
      )}
    </Stack.Navigator>
  );
}

// Root Layout Component
export default function RootLayout() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
