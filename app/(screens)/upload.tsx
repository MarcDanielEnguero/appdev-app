import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import React from "react";

export default function UploadScreen() {
  return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<SafeAreaView className="flex-1 bg-[#171717]">
      <View className="flex h-full justify-center  p-5">
        <View className="flex  flex-row innerbox">
          {/* Image here */}
          <View className="mr-5">
            <Image
              className="h-16 w-16 rounded-full"
              source={require("@/assets/images/user-profile/user_profile.jpg")}
            />
          </View>

          {/* POST SECTION */}
          <View className="flex-col max-w-screen-md justify-start ">
            {/* User name */}
            <Text className="text-white font-bold mb-2">Kenneth</Text>

            {/* Input field with multiline - added proper padding and height control */}
            <TextInput
              className="text-white rounded w-[60vw] min-h-[60px] "
              placeholder="Looking for?"
              placeholderTextColor="#878787"
              multiline={true}
              numberOfLines={4}
              style={{
                textAlignVertical: "top", // Makes text start from top
              }}
            />

            {/* Button with fixed width - centered */}
            <View className="flex justify-start">
              <TouchableOpacity className="bg-[#0a0a0a] p-2 rounded w-24">
                <Text className="text-center text-white">Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
</TouchableWithoutFeedback>
  
  );
}
