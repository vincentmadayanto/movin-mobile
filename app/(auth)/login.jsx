import { Link, router } from "expo-router";
import { View, Text } from "react-native";

const Login = () => {
  return (
    <View>
      <Text className="text-5xl">Login</Text>
      <Link href={"/home"}>Ke Home</Link>
    </View>
  );
};

export default Login;
