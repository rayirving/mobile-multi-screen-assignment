import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs backBehavior="history">
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{ headerShown: false, title: "Search" }}
      />
      <Tabs.Screen
        name="review"
        options={{ headerShown: false, title: "Review" }}
      />
      <Tabs.Screen
        name="activity"
        options={{ headerShown: false, title: "Activity" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: "Profile" }}
      />
    </Tabs>
  );
};

export default TabLayout;
