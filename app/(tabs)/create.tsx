import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import TextInputCustom from "@/components/Form/TextInputCustom";
import LabelCustom from "@/components/Form/LabelCustom";
import ButtonCustom from "@/components/Form/Button";
import { icons } from "@/constants";
export default function create() {
  const { height, width } = Dimensions.get("window");
  return (
    <SafeAreaView className="bg-primary">
      <ScrollView contentContainerStyle={{ minHeight: 900 }}>
        <Text className="text-white font-bold mt-[40px] w-[90%] mx-auto text-2xl">
          Upload Video
        </Text>
        <View className="w-[90%] mx-auto mt-[32px] space-y-1">
          <LabelCustom labelName="Video Title" />
          <TextInputCustom
            placeholderValue="Give your video a catchy title..."
            placeholderColor="#CDCDE0"
            changeTextinput={() => {
              console.log("run");
            }}
          />
        </View>
        <View className="w-[88%] mx-auto mt-[32px] space-y-1">
          <LabelCustom labelName="Upload Video" />
          <View
            className="bg-[#1E1E2D] h-48  flex-row justify-center items-center rounded-md"
            style={{ width: width - 40 }}
          >
            <View className="border border-dashed border-secondary-200 p-2  justify-center items-center ">
              <Image className="w-12 h-12" source={icons.upload}></Image>
            </View>
          </View>
        </View>
        <View className="w-[90%] mx-auto mt-[32px] space-y-1">
          <LabelCustom labelName="Thumbnail Image" />
          <View
            className="bg-[#1E1E2D] h-20  flex-row justify-center items-center rounded-md"
            style={{ width: width - 40 }}
          >
            <View className="flex-row gap-2 item-center">
              <Image className="w-6 h-6" source={icons.upload}></Image>
              <Text className="text-[#CDCDE0]">Choose a file</Text>
            </View>
          </View>
        </View>
        <View className="w-[90%] mx-auto mt-[32px] space-y-1">
          <LabelCustom labelName="AI Prompt" />
          <TextInputCustom
            placeholderValue="The AI prompt of your video...."
            placeholderColor="#CDCDE0"
            changeTextinput={() => {
              console.log("run");
            }}
          />
        </View>
        <View className="mt-6 w-[90%] mx-auto">
          <ButtonCustom
            name="Submit & Publish"
            Callback={() => {
              console.log("run");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
