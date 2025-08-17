import "@/styles/tailwind.css";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "teal",
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                color={color}
                name="numeric-1-box-outline"
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="second"
          options={{
            title: "Second",
            popToTopOnBlur: true,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                color={color}
                name="numeric-2-box-outline"
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="third"
          options={{
            title: "Third",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                color={color}
                name="numeric-3-box-outline"
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="fourth"
          options={{
            title: "Fourth",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                color={color}
                name="numeric-4-box-outline"
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
