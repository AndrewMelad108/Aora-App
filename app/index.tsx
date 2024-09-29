import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { images, SIZES } from "../constants";
import Btn from "@/components/Form/Button";
export default function Index() {
  const router = useRouter();
  const clickHandle = () => {
    router.push("/login");
  };
  return (
    <>
      <SafeAreaView className="bg-primary flex-1 ">
        <ScrollView className="min-h-screen">
          <View style={{ marginTop: SIZES.xLarge * 3.5 }}>
            <Image
              source={images.logo}
              className="w-[115px] h-[34.07px] m-auto "
              resizeMode="contain"
            ></Image>
          </View>
          <View style={{ marginTop: SIZES.medium }} className=" mx-auto">
            <Image
              source={images.cards}
              resizeMode="contain"
              className="w-[375px] h-[298px]"
            />
          </View>
          <View style={{ marginTop: SIZES.medium, position: "relative" }}>
            <Text className="text-white m-auto font-bold  text-[30px] text-center ">
              Discover Endless Possibilities with
              <Text className="text-secondary-100 ">Aora</Text>
            </Text>
            <Image
              className="w-16 h-16 absolute right-[7%] -bottom-[30%]"
              resizeMode="contain"
              source={images.path}
            ></Image>
          </View>
          <View style={{ paddingBottom: SIZES.large }}>
            <Text className="text-[#CDCDE0] text-center  mb-[30px]">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
            <Btn name="Continue with Email" Callback={clickHandle} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
