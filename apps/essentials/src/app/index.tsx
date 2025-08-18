import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function Page() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Stack.Screen
        options={{
          headerRight: () => <DrawerToggleButton />,
        }}
      />
      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}
