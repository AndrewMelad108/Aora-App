import { View, Text, Image, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { dataList } from "@/constants/data";

import TextInputCustom from "@/components/Form/TextInputCustom";
import VideosCard from "../../components/Shared/videosCard";
export default function bookmark() {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        ListHeaderComponent={
          <>
            <Text className="text-white font-bold mt-[40px] w-[90%] mx-auto text-2xl">
              Saved Videos
            </Text>
            <View className="w-[90%] mx-auto space-y-2">
              <TextInputCustom
                placeholderValue="Search for a video topic"
                placeholderColor="#CDCDE0"
                changeTextinput={() => {
                  console.log("run");
                }}
              />
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
