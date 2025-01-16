import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";

export default function UploadScreen() {
  const [color, setColor] = useState("dark");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-[#171717]">
        <View className="flex h-full justify-center p-5 ">
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

              {/* Status matcher */}
              <View className="flex flex-row ">
                <TouchableOpacity style={styles.IconPadding}>
                  <MaterialCommunityIcons
                    name="notebook"
                    size={20}
                    color={"#878787"}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.IconPadding}>
                  <MaterialCommunityIcons
                    name="food"
                    size={20}
                    color={"#878787"}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.IconPadding}>
                  <MaterialCommunityIcons
                    name="run"
                    size={20}
                    color={"#878787"}
                  />
                </TouchableOpacity>
              </View>

              {/* Input field with multiline - added proper padding and height control */}
              <TextInput
                className="text-white rounded w-[60vw] min-h-[60px] border-[#6B6B6B] p-2 border mt-4 mb-4" 
                placeholder="Looking for?"
                placeholderTextColor="#878787"
                multiline={true}
                numberOfLines={4}
                style={{
                  textAlignVertical: "top", // Makes text start from top
                }}
              />
            
            <View className="flex flex-row ">
                <TouchableOpacity style={styles.IconPadding}>
                  <MaterialCommunityIcons
                    name="image-multiple-outline"
                    size={20}
                    color={"#878787"}
                  />
                </TouchableOpacity>
              </View>

              {/* Button with fixed width - centered */}
              <View className="flex justify-start mt-5">
                <TouchableOpacity className="bg-[#0a0a0a] rounded p-2 w-24">
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

const styles = StyleSheet.create({
  IconPadding: {
    paddingRight: 8,
  },
});
