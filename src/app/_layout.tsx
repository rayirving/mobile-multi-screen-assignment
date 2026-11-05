import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="film/[id]" options={{ title: "", headerBackTitle: "Back" }} />
    </Stack>
  );
};

export default RootLayout;
