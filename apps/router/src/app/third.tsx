import { View } from "react-native";
import { AppText } from "@/components/app-text";

export default function Index() {
  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center size="heading">
        Third Screen
      </AppText>
    </View>
  );
}
