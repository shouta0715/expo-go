import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "@/styles/tailwind.css";
import { useAuthStore } from "@/utils/auth-store";

export default function RootLayout() {
  const { isLoggedIn, shouldCreateAccount, hasCompletedOnboarding } =
    useAuthStore();

  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn && hasCompletedOnboarding}>
          <Stack.Screen name="sign-in" />
          <Stack.Protected guard={shouldCreateAccount}>
            <Stack.Screen name="create-account" />
          </Stack.Protected>
        </Stack.Protected>
        <Stack.Protected guard={!hasCompletedOnboarding}>
          <Stack.Screen name="onboarding" />
        </Stack.Protected>
      </Stack>
    </>
  );
}
