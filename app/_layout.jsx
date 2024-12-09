import { Stack } from "expo-router";
import "../global.css";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: "#f8f9fa",
        },
      }}
    >
      <Stack.Screen
        name="(auth)/login"
        options={{ headerShown: false, title: "Login" }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Login" }}
      />
      <Stack.Screen
        name="transfer"
        options={{ title: "Transfer ke Rekening Bank" }}
      />
    </Stack>
  );
};
export default RootLayout;
