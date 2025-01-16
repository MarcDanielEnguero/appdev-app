import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import IndexLayout from ".";
import UploadScreen from "./upload";


const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();


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
        component={IndexLayout} // Showing the TopTabScreen component here
        options={{
          tabBarLabelStyle: { display: 'none' }, // Hide label for the icon
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> // Home icon
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
        name="Create Post"
        component={UploadScreen} // Showing the TopTabScreen component here
        options={{
          headerShown: true,
          headerStyle: {
            height: 60, // Adjust the height as needed (default is usually ~80)
            backgroundColor: "#313131", // Optional: Match header background to your theme
        
          },
          headerTitleStyle: {
            fontSize: 20, // Adjust font size
            color: "#ffffff", // Optional: Set title color
            lineHeight: 20,
            paddingBottom: 10
            // textAlignVertical: "center", // Center text vertically
          },
          tabBarStyle: {
            backgroundColor: "#171717",
            justifyContent: 'center', // Ensure content is centered
            alignItems: 'center',
          },
          tabBarLabelStyle: { display: 'none' }, // Hide label for the icon
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus" color={color} size={size} /> // Home icon
          ),
        }}
      />

<BottomTab.Screen
        name="notification"
        component={IndexLayout} // Showing the TopTabScreen component here
        options={{
          tabBarLabelStyle: { display: 'none' }, // Hide label for the icon
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} /> // Home icon
          ),
        }}
      />

<BottomTab.Screen
        name="Profile"
        component={IndexLayout} // Showing the TopTabScreen component here
        options={{
          tabBarLabelStyle: { display: 'none' }, // Hide label for the icon
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} /> // Home icon
          ),
        }}
      />



    </BottomTab.Navigator>
  );
}

export default function TabLayout() {
  return (
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
      <Stack.Screen name="Root" component={BottomTabScreen} />
    </Stack.Navigator>
  );
}
