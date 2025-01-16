import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function UploadScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#171717] ">
      <View className="0 h-full justify-center">
        <View className="flex  flex-row  p-5 innerbox">
          {/* Image here */}
          <View className="mr-5">
            <Image className="h-16 w-16 rounded-full" source={require('@/assets/images/user-profile/user_profile.jpg')
            }/>
          </View>
          <View className="flex-col">


            {/* User name */}
            <Text>Kenneth</Text>  

            <TextInput className="text-white" placeholder="Looking for?"  placeholderTextColor="#878787" />
            <TouchableOpacity className="bg-[#0a0a0a] p-2 rounded">
                <Text className="text-center text-white">Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
