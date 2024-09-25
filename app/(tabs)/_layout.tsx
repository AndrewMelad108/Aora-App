import { View, Text, Image, PixelRatio } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";
const TabIcon = ({ name, icon, color, focused }: any) => {
  return (
    <>
      <View className="justify-center items-center gap-2">
        <Image
          className="w-4 h-4"
          source={icon}
          tintColor={color}
          resizeMode="contain"
        ></Image>
      </View>
      <Text
        style={{ color: color }}
        className={`${
          focused === true ? "font-psemibold" : "text-xs"
        } text-white`}
      >
        {name}
      </Text>
    </>
  );
};
export default function tabLayout() {
  const scaleRatio = PixelRatio.get();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false, // remove label icons
          tabBarActiveTintColor: "#FFA001", // background color icon in active
          tabBarInactiveTintColor: "#CDCDCD", // background color icon in  inactive
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            justifyContent: "center",
            alignContent: "center",
            height: "8%",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }): any => {
              return (
                <TabIcon
                  name="Home"
                  icon={icons.home} // Ensure this points to a valid image source
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            headerShown: false,
            title: "Create",
            tabBarIcon: ({ color, focused }): any => {
              return (
                <TabIcon
                  name="Create"
                  icon={icons.plus} // Ensure this points to a valid image source
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color, focused }): any => {
              return (
                <TabIcon
                  name="Profile"
                  icon={icons.profile} // Ensure this points to a valid image source
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            headerShown: false,
            title: "Bookmark",
            tabBarIcon: ({ color, focused }): any => {
              return (
                <TabIcon
                  name="Bookmark"
                  icon={icons.bookmark} // Ensure this points to a valid image source
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}
