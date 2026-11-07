import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#40bcf4",
        tabBarInactiveTintColor: "#d8dfe6",
        tabBarStyle: {
          height: 64 + insets.bottom, // 64 = visible bar height
          paddingTop: 8, // nudge the icons down to centre them
          backgroundColor: "#505c68",
          borderTopColor: "#2c3440",
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="review"
        options={{
          title: "Review",
          tabBarStyle: { display: "none" },
          popToTopOnBlur: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" size={30} color={"#00e054"} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "flash" : "flash-outline"}
              size={24}
              color={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={26}
              color={color as string}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
