// app/(screens)/_layout.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import ForYou from "."; // assuming you have a ForYou component
import Following from "./following"; // assuming you have a Following component

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

function BottomTabScreen() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#171717" }, // Dark background for bottom tab bar
        tabBarLabelStyle: { color: "#ffffff" }, // White text for labels
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TopTabScreen} // Showing the TopTabScreen component here
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      
      <BottomTab.Screen
        name="find"
        component={IndexLayout} // Showing the TopTabScreen component here
        options={{
          tabBarLabelStyle: { display: 'none' }, // Hide label for the icon
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} /> // Home icon
          ),
        }}
      />

      <BottomTab.Screen
        name="Discover"
        component={TopTabScreen} // Showing another instance of TopTabScreen
        options={{
          tabBarLabelStyle: { 
            display: 'none',
          }, // Hide label for the icon
          tabBarIcon: ({ color, size }) => (
            <Icon name="compass" color={color} size={size} /> // Compass icon
          ),
        }}
      />



    </BottomTab.Navigator>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: 'transparent',
      }}
    >
      <Stack.Screen name="Root" component={BottomTabScreen} />
    </Stack.Navigator>
  );
}

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

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}