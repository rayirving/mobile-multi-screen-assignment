import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack>
      <Stack.Screen
        name="(nav)"
        options={{
          title: "Letterboxd",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: 900,
            fontSize: 26,
            color: "#d8dfe6"
          },
          headerStyle: {
            backgroundColor: "#000000",
          }
          
        }}
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
