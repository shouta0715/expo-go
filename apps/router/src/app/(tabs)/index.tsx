import { Link } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";

function Page() {
  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center color="secondary" size="heading">
        Home
      </AppText>
      <Link asChild push href="/modal">
        <Button title="Open Modal" />
      </Link>
    </View>
  );
}

export default Page;
