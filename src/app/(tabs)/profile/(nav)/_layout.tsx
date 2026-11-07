import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NavTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      backBehavior="history"
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
          borderTopWidth: 0, // default is 1
          elevation: 0, // Remove shadow on android screen
          shadowOpacity: 0, // Remove shadow on apple screen
          borderBottomWidth: 0,
        },

        tabBarActiveTintColor: "#d8dfe6",
        tabBarInactiveTintColor: "#667788",
        tabBarActiveBackgroundColor: "#000000",
        tabBarInactiveBackgroundColor: "#000000",

        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
          margin: 0, // centers labels
        },
        tabBarLabel: ({ focused, color, children }) => (
          <View style={[styles.label, focused && styles.active]}>
            <Text style={[styles.labelText, { color }]}>{children}</Text>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          title: "Diary",
        }}
      />
      <Tabs.Screen
        name="lists"
        options={{
          title: "Lists",
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          title: "Watchlist",
        }}
      />
    </Tabs>
  );
};

export default NavTabs;

const styles = StyleSheet.create({
  label: {
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  active: {
    borderBottomColor: "#00e054",
  },
  labelText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
  },
});
