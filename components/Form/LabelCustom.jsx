import { View, Text } from "react-native";
import React from "react";

export default function LabelCustom({ labelName }) {
  return (
    <View>
      <Text className="text-[#CDCDE0] text-[16px]">{labelName}</Text>
    </View>
  );
}
