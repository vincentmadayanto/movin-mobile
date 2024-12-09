import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EmptyList = ({ image, description, buttonText, onPress }) => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center gap-10 px-20">
      <Image
        source={{
          uri: `${image}`,
        }}
        style={{ width: 380, height: 250 }}
        resizeMode="contain"
      />
      <Text className="text-center font-bold text-lg">{description}</Text>
      <TouchableOpacity onPress={onPress}>
        <View className="bg-yellow-400 w-[320] py-4 rounded-full">
          <Text className="text-center text-white font-bold">{buttonText}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EmptyList;
