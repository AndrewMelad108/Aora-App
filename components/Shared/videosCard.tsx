import { View, Text } from "react-native";
import React from "react";
interface Video {
  id: number;
  title: string;
  des: string;
  image: string;
  avatar: string;
}
export default function videosCard({ item }: any) {
  return (
    <View>
      <Text>{item.id}</Text>
    </View>
  );
}
