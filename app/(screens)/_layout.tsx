// app/(screens)/_layout.tsx
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import ForYou from ".";
import Following from "./following";
import { AuthProvider } from '../(screens)/AuthContext';
import LoginScreen from './LoginScreen';
import { useAuth } from '../(screens)/AuthContext';

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TopTabScreen() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#171717" },
        tabBarIndicatorStyle: { backgroundColor: "#ffffff" },
        tabBarLabelStyle: { color: "#ffffff" },
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
        tabBarStyle: { backgroundColor: "#171717" },
        tabBarLabelStyle: { color: "#ffffff" },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TopTabScreen}
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={TopTabScreen}
        options={{
          tabBarLabelStyle: { display: 'none' },
          tabBarIcon: ({ color, size }) => (
            <Icon name="compass" color={color} size={size} />
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