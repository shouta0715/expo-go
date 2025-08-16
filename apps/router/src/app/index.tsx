import { Link } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <View className="flex-1 justify-center p-4">
      <AppText center>Top Level Screen</AppText>
      <Link asChild push href="/second">
        <Button title="Go to Second" />
      </Link>
      <Link asChild push href="/third">
        <Button title="Go to Third" />
      </Link>
      <Link asChild push href="/(anything)/(fourth)/fifth/sixth">
        <Button title="Go to Sixth" />
      </Link>
    </View>
  );
}
