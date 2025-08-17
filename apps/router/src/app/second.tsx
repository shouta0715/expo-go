import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";

type Params = {
  name?: string;
};

export default function Index() {
  const { name } = useLocalSearchParams<Params>();

  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center size="heading">
        Second Screen
      </AppText>
      {name && (
        <AppText bold center>
          Name: {name}
        </AppText>
      )}
      <Link asChild push href="/third">
        <Button title="Go to Third" />
      </Link>
    </View>
  );
}
