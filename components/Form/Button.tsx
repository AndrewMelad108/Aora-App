import { View, Pressable, Text } from "react-native";
import React from "react";

export default function Button({
  name,
  Callback,
}: {
  name: string;
  Callback: () => void;
}) {
  return (
    <View className="w-[98%] mx-auto">
      <Pressable onPress={Callback} className=" bg-secondary rounded-lg">
        <Text className="text-[#161622] font-bold py-[18px] text-center">
          {name}
        </Text>
      </Pressable>
    </View>
  );
}
