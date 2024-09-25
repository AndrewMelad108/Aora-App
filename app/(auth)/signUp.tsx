import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, SIZES } from "../../constants";
import LabelCustom from "../../components/Form/LabelCustom";
import TextInputCustom from "../../components/Form/TextInputCustom";
import BottonCustom from "../../components/Form/Button";
import { Link } from "expo-router";
export default function signUp() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [ShowIcon, isShowIcon] = useState(true);
  return (
    <>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView
          style={{
            marginTop: SIZES.xLarge * 4,
            marginHorizontal: SIZES.large,
          }}
        >
          <View className="w-full h-[85vh]">
            <View style={{ marginBottom: SIZES.large + 22 }}>
              <Image
                className="w-[115px] h-[34.07px]"
                source={images.logo}
              ></Image>
            </View>
            <Text
              className="text-white font-bold"
              style={{
                fontSize: SIZES.xLarge - 2,
                marginBottom: SIZES.xLarge + 10,
              }}
            >
              Sign in
            </Text>
            <View className="form  space-y-3">
              <View className="input-field">
                <LabelCustom labelName="user name"></LabelCustom>
                <TextInputCustom
                  placeholderValue="Your unique username"
                  changeTextinput={(value) => {
                    console.log(value);
                  }}
                ></TextInputCustom>
              </View>
              <View className="input-field">
                <LabelCustom labelName="Email"></LabelCustom>
                <TextInputCustom
                  placeholderValue="Your unique Email"
                  changeTextinput={(value) => {
                    console.log(value);
                  }}
                ></TextInputCustom>
              </View>
              <View className="input-field">
                <LabelCustom labelName="Password"></LabelCustom>
                <TextInputCustom
                  placeholderValue="Please Enter Password"
                  PasswordFlag={!isShowPassword}
                  ShowIcon={ShowIcon}
                  showPassword={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                  changeTextinput={(value) => {
                    console.log(value);
                  }}
                ></TextInputCustom>
              </View>
              <Text className="text-right text-white mt-[18px] mb-[20px]">
                Forgot password
              </Text>
              <BottonCustom
                name="Log In"
                Callback={() => {
                  console.log("login");
                }}
              />
              <Text className="mt-[20px] text-center text-white">
                Already have an account?
                <Link className="text-secondary-200" href={"/login"}>
                  Login
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
