import { Stack } from "expo-router";
import "../global.css";
import { View } from "react-native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Messages from "./(screens)/messages";
import { Text } from "react-native";

Object.assign(Text, {
  defaultProps: {
    style: {
      color: "#ffffff", // Set global text color to white
    },
  },
});

export default function Layout() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  return (
    <SafeAreaProvider>
      <SafeAreaView 
        className={`flex-1 ${isDark ? "bg-[#000000]" : "bg-[#171717]"}`}
        edges={['top']}
      >
        <StatusBar style="light" />
        
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}