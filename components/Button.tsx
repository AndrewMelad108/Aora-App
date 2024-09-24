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
    <View className="m-auto">
      <Pressable onPress={Callback}>
        <Text className="text-[#161622] font-bold py-[18px] px-[82px] bg-secondary rounded-lg">
          {name}
        </Text>
      </Pressable>
    </View>
  );
}
