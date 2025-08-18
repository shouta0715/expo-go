import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/haptic-tab";
import { BlurTabBarBackground } from "@/components/tab-background.ios";

function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        tabBarBadgeStyle: {
          backgroundColor: "#000000",
          color: "#ffffff",
        },
        tabBarButton: HapticTab,
        tabBarBackground: Platform.select({
          ios: BlurTabBarBackground,
          default: undefined,
        }),
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: undefined,
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "My Home",
          tabBarLabel: "Home",
          tabBarBadge: "1",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              color={color}
              name={focused ? "home-sharp" : "home-outline"}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              color={color}
              name={focused ? "search-sharp" : "search-outline"}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
