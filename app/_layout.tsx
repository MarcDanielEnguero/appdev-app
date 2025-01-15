// app/_layout.tsx
import { Stack, Slot } from 'expo-router';
import "../global.css"
import { SafeAreaView, View } from 'react-native';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return (
    
    <View  className={`flex-1 ${ isDark ? '' : 'bg-[#171717]'} pt-14`}>
        <StatusBar style='light'/>
        <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent', // Ensure Stack's content doesn't override the parent View
          },
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    {/* <Slot /> */}
    </View>


  );
}
