import { Stack } from "expo-router";

export default function SearchStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
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
