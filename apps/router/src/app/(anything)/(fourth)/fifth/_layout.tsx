import { Slot } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";

export default function Layout() {
  return (
    <View className="min-w-0 flex-1 items-center justify-center bg-blue-200">
      <AppText>Stopped by the fifth screen</AppText>
      <Slot />
    </View>
  );
}
