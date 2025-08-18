import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/utils/auth-context";

export default function RootLayout() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      <Stack.Screen
        name="modal-with-stack"
        options={{ presentation: "modal" }}
      />
    </Stack>
  );
}
