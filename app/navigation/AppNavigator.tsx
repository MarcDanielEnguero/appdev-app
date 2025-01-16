// app/navigation/AppNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from "../(screens)/AuthContext";
import LoginScreen from "../(screens)/LoginScreen";
import ForYou from "../(screens)";
import Following from "../(screens)/following";

type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

type AuthStackParamList = {
  Login: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

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

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

export default function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <RootStack.Screen 
          name="Auth" 
          component={AuthNavigator}
          options={{
            animationTypeForReplace: isAuthenticated ? 'push' : 'pop',
          }}
        />
      ) : (
        <RootStack.Screen 
          name="Main" 
          component={BottomTabScreen}
        />
      )}
    </RootStack.Navigator>
  );
}