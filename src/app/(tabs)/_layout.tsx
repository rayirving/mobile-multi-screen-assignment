import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs backBehavior="history">
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: true,
          headerTitle: "Letterboxd",
          headerTitleAlign: "center",

          headerStyle: {
            elevation: 0,       // Removes shadow on android screen
            shadowOpacity: 0,   // Removes shadow on apple screen

          },
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
        options={{ headerShown: false, title: "activity" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: "Profile" }}
      />
    </Tabs>
  );
};

export default TabLayout;
