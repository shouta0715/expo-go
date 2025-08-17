import { Stack, usePathname } from "expo-router";

export default function SecondLayout() {
  const pathname = usePathname();

  return (
    <Stack
      screenOptions={{
        animation: pathname.startsWith("/second") ? "default" : "none",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Second" }} />
      <Stack.Screen name="nested" options={{ title: "Nested" }} />
      <Stack.Screen name="also-nested" options={{ title: "Also Nested" }} />
    </Stack>
  );
}
