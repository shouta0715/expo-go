import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";
import { useAuthStore } from "@/utils/auth-store";

function Page() {
  const { completeOnboarding } = useAuthStore();

  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center color="secondary" size="heading">
        Final
      </AppText>
      <Button title="Complete" onPress={completeOnboarding} />
    </View>
  );
}

export default Page;
