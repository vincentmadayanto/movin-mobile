import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button, Text } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#1a1a1a", // Background color of the tab bar
          paddingTop: 7,
          height: 80, // Height of the tab bar
        },
        // tabBarItemStyle: {
        //   justifyContent: "center",
        //   alignItems: "center",
        // },
        tabBarActiveTintColor: "#fff", // Color for the active tab
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
            <MaterialCommunityIcons name="home" size={32} color="white" />
          ),
        }}
      />

      <Tabs.Screen
        name="transactionsHistory"
        options={{
          headerShown: false,
          title: "Transaction",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="history" size={32} color="white" />
          ),
        }}
      />

      <Tabs.Screen
        name="transfer"
        options={{
          headerShown: false,
          title: "Transfer",
          tabBarIcon: () => <FontAwesome name="send" size={24} color="white" />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: () => (
            <FontAwesome name="user-circle-o" size={26} color="white" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
