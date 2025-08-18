import "@/styles/tailwind.css";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const menuItems = [
  {
    id: "profile",
    name: "profile",
    title: "プロフィール",
    label: "プロフィール",
    icon: "person",
  },
  {
    id: "settings",
    name: "settings",
    title: "設定",
    label: "設定",
    icon: "settings",
  },
] as const;

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props}>
      <View className="items-center p-4">
        <Image
          className="h-10 w-10"
          source={require("@/assets/router-icon.png")}
        />
        <Text>Essentials</Text>
      </View>
      <DrawerItemList {...props} />
      <View className="p-4 pt-10">
        <Text className="font-semibold">アイテム 一覧</Text>
      </View>
      {menuItems.map((item) => {
        const isFocused = pathname === `/${item.id}`;

        return (
          <DrawerItem
            key={item.id}
            activeTintColor="red"
            focused={isFocused}
            icon={({ color, size }) => (
              <Ionicons color={color} name={item.icon} size={size} />
            )}
            label={item.label}
            onPress={() => {
              router.push(`/${item.id}`);
            }}
            {...props}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveTintColor: "red",
          drawerHideStatusBarOnOpen: true,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "ホーム",
            drawerLabel: "ホーム",
            drawerIcon: ({ color, size }) => (
              <Ionicons color={color} name="home" size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="news"
          options={{
            title: "ニュース",
            drawerLabel: "ニュース",
            drawerIcon: ({ color, size }) => (
              <Ionicons color={color} name="newspaper" size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="[id]"
          options={{ drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
