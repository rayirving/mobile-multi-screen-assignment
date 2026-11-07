import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack>
      <Stack.Screen
        name="(nav)"
        options={{
          title: "Profile",
          headerTitleAlign: "left",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: 900,
            fontSize: 24,
            color: "#d8dfe6"
          },
          headerStyle: {
            backgroundColor: "#000000",
          }
          
        }}
      />
    </Stack>
  );
}
