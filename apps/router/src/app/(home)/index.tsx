import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center p-4">
      <AppText center>Top Level Screen</AppText>
      <Link asChild push href="/(home)/home-nested">
        <Button title="Go to Home Nested" />
      </Link>
      {router.canGoBack() && (
        <Button title="Back to Home" onPress={() => router.back()} />
      )}
    </View>
  );
}
