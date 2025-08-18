import { View } from "react-native";
import { AppText } from "@/components/app-text";

function Vip() {
  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center color="secondary" size="heading">
        Vip
      </AppText>
    </View>
  );
}

export default Vip;
