import { View, Text, Pressable, Modal, Alert } from "react-native";
import React from "react";

export default function ModelCustom({
  title,
  message,
  modalVisible,
  hideModal,
}: {
  title: string;
  message: string;
  modalVisible: boolean;
  hideModal: () => void;
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        hideModal();
      }}
    >
      <View className="justify-center  items-center m-auto">
        <View className="w-[250px] h-54 bg-white p-2 shadow-md shadow-white rounded-sm">
          <Text className="title-model mb-4 text-xl text-secondary-100 ">
            {title}
          </Text>
          <Text className="title-model mb-4  text-secondary-100 ">
            {message}
          </Text>
          <Pressable className="w-full" onPress={hideModal}>
            <Text className="text-right text-secondary-100 font-bold p-2">
              Ok
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
