import { View, Text, Image, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import { dataList } from "@/constants/data";

import TextInputCustom from "@/components/Form/TextInputCustom";
import VideosCard from "../../components/Shared/videosCard";
export default function home() {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        ListHeaderComponent={
          <>
            <View className="home-header mt-8 mx-4  flex-row items-center justify-between">
              <View>
                <Text className="text-[#CDCDE0] text-md">Weclome Back</Text>
                <Text className="text-white mt-1 text-[24px] font-bold ">
                  Andrew
                </Text>
              </View>
              <Image
                resizeMode="contain"
                className="h-[30.76px] w-[23.05px] "
                source={images.logoSmall}
              ></Image>
            </View>
            <View className="w-[90%] mx-auto space-y-2">
              <TextInputCustom
                placeholderValue="Search for a video topic"
                placeholderColor="#CDCDE0"
                changeTextinput={() => {
                  console.log("run");
                }}
              />
              <Text className="text-[#CDCDE0] mt-[36px]">Trending Videos</Text>
            </View>
          </>
        }
        data={dataList}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View className="mx-4">
            <VideosCard item={item}></VideosCard>
          </View>
        )}
        refreshControl={
          <RefreshControl
            progressViewOffset={100}
            refreshing={refreshing}
            colors={["#FF9C01"]}
            progressBackgroundColor="#161622"
          />
        }
      />
    </SafeAreaView>
  );
}
