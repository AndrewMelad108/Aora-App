import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
interface Video {
  id: number;
  title: string;
  des: string;
  image: string;
  avatar: string;
}

export default function videosCard({ item }: any) {
  const { height, width } = Dimensions.get("window");
  const [isShowMenu, setIsShowMenu] = useState(false);
  const showMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <View className="my-[30px] flex-col items-center">
      <View className="flex-row items-center justify-between w-full">
        <View className="personal-data flex-row gap-2">
          <Image resizeMode="contain" source={item.avatar}></Image>
          <View>
            <Text className="text-white text-[14px] font-bold">
              {item.title}
            </Text>
            <Text className="mt-[2px] text-[12px] text-[#CDCDE0]">
              {item.des}
            </Text>
          </View>
        </View>
        <Pressable onPress={showMenu}>
          <Image
            className="h-6 mx-auto"
            resizeMode="contain"
            source={icons.menu}
          ></Image>
        </Pressable>
      </View>
      <View className="relative">
        <Image
          className="mt-2"
          style={{ width: width, height: height / 4 }}
          resizeMode="contain"
          source={item.image}
        ></Image>

        {isShowMenu && (
          <View className="Menu absolute min-h-[64px] w-[111px] right-7 top-0 bg-[#1E1E2D] rounded-[5px] border-[1px] border-[#232533] p-3 space-y-1">
            <View className="flex-row gap-2 items-center">
              <Image
                source={icons.bookmark}
                className="h-3 w-3 "
                resizeMode="contain"
              />
              <Text className="text-white text-[12px] ">Save</Text>
            </View>
            <View className="flex-row gap-2 items-center">
              <Image
                source={icons.Delete}
                className="h-3 w-3 "
                resizeMode="contain"
              />
              <Text className="text-white text-[12px] ">Delete</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
background:;
