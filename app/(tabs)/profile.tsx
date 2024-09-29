import {
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { icons, images } from "../../constants";
import { dataList } from "@/constants/data";

import VideosCard from "../../components/Shared/videosCard";
export default function profile() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        ListHeaderComponent={
          <>
            <View className="ml-auto mt-[20px] pr-2">
              <Pressable
                onPress={() => {
                  router.push("/login");
                }}
              >
                <Image className="w-6 h-6" source={icons.logout}></Image>
              </Pressable>
            </View>
            <View className="flex-col justify-center items-center">
              <View className="border-2 border-secondary rounded-md">
                <Image
                  className="w-[60px] h-[60px]"
                  source={images.avatar4}
                ></Image>
              </View>
              <Text className="text-white mt-3 text-[18px]">Andrew</Text>
              <View className="flex-row gap-6 mt-2">
                <View className="post-numbers flex-col justify-center items-center">
                  <Text className="text-lg font-bold text-white">55</Text>
                  <Text className="text-[#CDCDE0]">Posts</Text>
                </View>
                <View className="view-numbers flex-col justify-center items-center">
                  <Text className="text-lg font-bold text-white">1.5K</Text>
                  <Text className="text-[#CDCDE0]">Views</Text>
                </View>
              </View>
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
