import { Text, View, SafeAreaView, Image } from "react-native";
import { useRouter } from "expo-router";
import { images } from "../constants";
import Btn from "@/components/Button";
export default function Index() {
  const router = useRouter();
  const clickHandle = () => {
    router.push("/login");
  };
  return (
    <>
      <SafeAreaView className="bg-primary flex-1 ">
        <View className="mt-[84px]">
          <Image
            source={images.logo}
            className="w-[115px] h-[34.07px] m-auto "
            resizeMode="contain"
          ></Image>
        </View>
        <View className="mt-[26px]">
          <Image
            source={images.cards}
            resizeMode="contain"
            className="w-[375px] h-[298px]"
          />
        </View>
        <View className="mt-[10px]">
          <Text className="text-white m-auto font-bold text-[30px] text-center">
            Discover Endless Possibilities with
            <Text className="text-secondary-100">Aora</Text>
          </Text>
          <Image
            className="w-16 h-16 absolute right-9 -bottom-6"
            resizeMode="contain"
            source={images.path}
          ></Image>
        </View>
        <View>
          <Text className="text-[#CDCDE0] text-center mt-[20] mb-[30px]">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <Btn name="Continue with Email" Callback={clickHandle} />
        </View>
      </SafeAreaView>
    </>
  );
}
