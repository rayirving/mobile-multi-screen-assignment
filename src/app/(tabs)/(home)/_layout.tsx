import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack>
      <Stack.Screen
        name="(nav)"
        options={{ title: "Letterboxd", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="film/[id]"
        options={{
          title: "",
          headerTransparent: true,
          headerTintColor: "#FFFFFF",
          headerShadowVisible: false,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
