import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      safeAreaInsets={{
        // removes default safeAreaInsets
        // safeAreaInsets -> causes weird formatting when Tab is at top of screen, but under header
        top: 0, 
        bottom: 0,
      }}
      screenOptions={{
        tabBarPosition: "top", // Move tabs to top
        headerShown: false,
        tabBarLabelPosition: "beside-icon", // Move labels next to icons (then hide icons)

        // Hide icon
        tabBarIconStyle: {
          display: "none",
        },

        tabBarStyle: {
          borderTopWidth: 0,  // default is 1
          elevation: 0,       // Remove shadow on android screen
          shadowOpacity: 0,   // Remove shadow on apple screen
        },

        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
          margin: 0, // centers labels
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Films",
        }}
      />
      <Tabs.Screen
        name="reviews"
        options={{
          title: "Reviews",
        }}
      />
      <Tabs.Screen
        name="lists"
        options={{
          title: "Lists",
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
        }}
      />
    </Tabs>
  );
};

export default HomeTabs;
