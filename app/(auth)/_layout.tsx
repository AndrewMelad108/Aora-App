import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
const authLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#161622" style="light" animated={true} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="signUp" />
      </Stack>
    </>
  );
};

export default authLayout;
