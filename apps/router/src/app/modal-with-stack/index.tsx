import { Link } from "expo-router";
import React from "react";
import { Button, View } from "react-native";
import { AppText } from "@/components/app-text";

export default function Index() {
  return (
    <View className="flex-1 justify-center p-4">
      <AppText center>Modal with Stack</AppText>
      <Link asChild push href="/modal-with-stack/nested">
        <Button title="Go to Nested" />
      </Link>
    </View>
  );
}
