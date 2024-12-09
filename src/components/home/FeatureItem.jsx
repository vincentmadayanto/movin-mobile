import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const FeatureItem = ({ label, icon, color, onPress }) => {
  return (
    <View className="w-28 items-center gap-1.5">
      <TouchableOpacity
        onPress={onPress}
        className={`rounded-full w-14 h-14 justify-center items-center pr-1 ${color}`}
      >
        <FontAwesome name={icon} size={23} color="white" />
      </TouchableOpacity>
      <Text className="text-center">{label}</Text>
    </View>
  );
};

export default FeatureItem;
