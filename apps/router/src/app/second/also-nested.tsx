import { View } from "react-native";
import { AppText } from "@/components/app-text";

export default function Index() {
  return (
    <View className="flex-1 justify-center bg-yellow-200 p-4">
      <AppText bold center size="heading">
        Also Nested Screen
      </AppText>
    </View>
  );
}
