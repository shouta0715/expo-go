import { Link } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <View className="flex-1 justify-center bg-green-200 p-4">
      <AppText bold center size="heading">
        Third Screen
      </AppText>
      <Link asChild push href="/">
        <Button title="Go to Home (push)" />
      </Link>
      <Link asChild dismissTo href="/">
        <Button title="Go to Home (dismissTo)" />
      </Link>
      <Link asChild replace href="/second">
        <Button title="Go to Second (replace)" />
      </Link>
    </View>
  );
}
