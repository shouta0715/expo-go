import { Link } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center size="heading">
        Second Screen
      </AppText>
      <Link asChild push href="/second/nested">
        <Button title="Go to Nested" />
      </Link>
      <Link asChild push href="/second/also-nested">
        <Button title="Go to Also Nested" />
      </Link>
      <Link asChild push href="/third">
        <Button title="Go to Third" />
      </Link>
    </View>
  );
}
