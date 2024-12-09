import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TabsLayout = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: "transparent" }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            // borderTopLeftRadius: 20,
            // borderTopRightRadius: 20,
            // borderRadius: 50,
            overflow: "hidden",
            backgroundColor: "white",
            paddingTop: 8,
            // marginHorizontal: 22,
            // width: "90%",
            height: 80,
            position: "absolute",
            // bottom: 18,
          },
          tabBarActiveTintColor: "#facc15", // Color for the active tab
          tabBarInactiveTintColor: "#888", // Color for the inactive tabs
          tabBarLabelStyle: {
            fontSize: 14, // Font size for tab labels
            fontWeight: "medium", // Label weight
          },
          tabBarIconStyle: {
            marginBottom: 3, // Space between icon and label
            alignSelf: "center",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={32} color="gray" />
            ),
          }}
        />

        <Tabs.Screen
          name="transactionsHistory"
          options={{
            headerShown: false,
            title: "Transaction",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="history" size={32} color="gray" />
            ),
          }}
        />

        <Tabs.Screen
          name="quickTransfer"
          options={{
            headerShown: false,
            title: "Transfer",
            tabBarIcon: () => (
              <FontAwesome name="send" size={24} color="gray" />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: () => (
              <FontAwesome name="user-circle-o" size={26} color="gray" />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default TabsLayout;
