import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import headerImg from "../../../assets/header-image.png";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import FeatureItem from "./FeatureItem";
import { router } from "expo-router";

const Home = () => {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <ImageBackground
        className="flex-1 justify-end"
        resizeMode="cover"
        source={headerImg}
      >
        <SafeAreaView className="absolute top-2 mx-2.5 pr-5 flex-row justify-between w-[100%]">
          {/* Header */}
          <TouchableOpacity className="flex-row bg-white items-center rounded-3xl py-2.5 px-5 gap-2">
            <FontAwesome5
              name="user-alt"
              size={16}
              color="#fad232"
              className="border border-gray-300 rounded-full p-1.5"
            />
            <Text className="text-[13px] font-medium">Vincent</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row bg-gray-50 items-center rounded-3xl py-2.5 px-5 gap-1">
            <MaterialIcons name="logout" size={20} color="red" />
            <Text className="text-red-500 text-[13px] font-medium">Logout</Text>
          </TouchableOpacity>
        </SafeAreaView>

        {/* Main */}
        <View className="bg-white mx-3 mb-[92px] h-[62%] rounded-3xl items-center justify-center">
          <FeatureItem
            onPress={() => router.push("/transfer")}
            icon="send"
            label="Transfer Bank"
            color="bg-yellow-400"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
