import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

export function BlurTabBarBackground() {
  return (
    <BlurView
      intensity={60}
      style={StyleSheet.absoluteFill}
      tint="systemChromeMaterial"
    />
  );
}

export function TabBackground() {
  return useBottomTabBarHeight();
}
