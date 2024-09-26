import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images, SIZES } from "../../constants";
import LabelCustom from "../../components/Form/LabelCustom";
import TextInputCustom from "../../components/Form/TextInputCustom";
import BottonCustom from "../../components/Form/Button";
import ModelCustom from "@/components/ModelCustom";
import { signIn } from "../../lib/appwrite";
import { useAppStore } from "../../store/aroa-store";

export default function login() {
  const router = useRouter();
  const { counter } = useAppStore();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [ShowIcon, isShowIcon] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const submitHandle = async () => {
    if (!user.email || !user.password) {
      setMessage("Please fill all fields");
      setModalVisible(true);
    } else {
      // try {
      //   await signIn(user.email, user.password);
      //   console.log(await signIn(user.email, user.password));
      //   router.push("/home");
      // } catch (error: any) {
      //   setMessage(error.message);
      //   setModalVisible(true);
      // }
      router.push("/home");
    }
  };
  return (
    <>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView
          style={{
            marginHorizontal: SIZES.large,
          }}
        >
          <View className="w-full justify-center h-[85vh]">
            <ModelCustom
              title="Error"
              message={message}
              modalVisible={modalVisible}
              hideModal={() => {
                setModalVisible(!modalVisible);
              }}
            />
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
                <LabelCustom labelName="Email"></LabelCustom>
                <TextInputCustom
                  placeholderValue="Your unique Email"
                  changeTextinput={(value) => {
                    setUser({ ...user, email: value });
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
                    setUser({ ...user, password: value });
                  }}
                ></TextInputCustom>
              </View>
              <Text className="text-right text-white mt-[18px] mb-[20px]">
                Forgot password
              </Text>
              <BottonCustom name="Log In" Callback={submitHandle} />
              <Text className="mt-[20px] text-center text-white">
                Don’t have an account?
                <Link className="text-secondary-200" href={"/signUp"}>
                  Signup
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
