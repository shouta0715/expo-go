import { Tabs } from "expo-router";
import { useAuthStore } from "@/utils/auth-store";

function TabLayout() {
  const { isVip } = useAuthStore();

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Protected guard={isVip}>
        <Tabs.Screen name="vip" options={{ title: "VIP" }} />
      </Tabs.Protected>
    </Tabs>
  );
}

export default TabLayout;
