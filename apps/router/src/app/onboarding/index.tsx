import { Link } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";

function Page() {
  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center color="secondary" size="heading">
        Onboarding
      </AppText>
      <Link asChild push href="/onboarding/final">
        <Button title="Final" />
      </Link>
    </View>
  );
}

export default Page;
