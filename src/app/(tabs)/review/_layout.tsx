import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function ReviewLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#14181c" },
        headerTintColor: "#ffffff",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="film/[id]"
        options={{ headerShown: false}}
      />
    </Stack>
  );
}
