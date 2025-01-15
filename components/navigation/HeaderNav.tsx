import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";


export default function () {
  return (

<View className="flex flex-row justify-around border-b-2 border-neutral-800">
      <TouchableOpacity className="">
        <Text className="text-white text-xl">For You</Text>
      </TouchableOpacity>

      <TouchableOpacity className="">
        <Text className="text-white text-xl">Following</Text>
      </TouchableOpacity>
    </View>


  );
}
