import { Link } from "expo-router";
import { Button, Image, ScrollView, Text, View } from "react-native";

export default function Page() {
  return (
    <ScrollView className="flex-1 p-4">
      <Link href="/explore">
        <Button title="Explore" />
      </Link>
      <View className="gap-4">
        {[...Array(100)].map((_, index) => (
          <View key={index} className="flex-row items-center gap-2">
            <Image source={require("@/assets/favicon.png")} />
            <Text className="text-center text-2xl font-bold">
              Item {index + 1}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
