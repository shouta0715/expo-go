import { View } from "react-native";
import { AppText } from "@/components/app-text";

function Page() {
  return (
    <View className="flex-1 items-center justify-center">
      <AppText bold center color="secondary" size="heading">
        CreateAccount
      </AppText>
    </View>
  );
}

export default Page;
