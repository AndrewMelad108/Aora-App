import { View, TextInput, Image, Pressable } from "react-native";
import React from "react";
import { SIZES, icons } from "../../constants";
export default function TextInputCustom({
  placeholderValue,
  changeTextinput,
  PasswordFlag,
  showPassword,
  ShowIcon,
}: {
  placeholderValue: string;
  changeTextinput: (value: string) => void;
  showPassword?: () => void;
  PasswordFlag?: boolean;
  ShowIcon?: boolean;
}) {
  return (
    <View className="relative" style={{ marginTop: SIZES.medium }}>
      <TextInput
        placeholder={placeholderValue}
        placeholderTextColor={"#7B7B8B"}
        className="text-white placeholder:text-[16px] border-[1px] border-[#232533] rounded-[8px] p-[16px] bg-[#1E1E2D] focus:border-secondary-100 focus:border-1"
        secureTextEntry={PasswordFlag}
        onChangeText={(value) => changeTextinput(value)}
      />
      {ShowIcon &&
        (PasswordFlag ? (
          <Pressable
            className="absolute right-5 bottom-[25%]"
            onPress={showPassword}
          >
            <Image
              className="w-6 h-6"
              resizeMode="contain"
              source={icons.eye}
            />
          </Pressable>
        ) : (
          <Pressable
            className="absolute right-5 bottom-[25%]"
            onPress={showPassword}
          >
            <Image
              className="w-6 h-6"
              resizeMode="contain"
              source={icons.eyeHide}
            />
          </Pressable>
        ))}
    </View>
  );
}
