import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";
import { useAuthStore } from "@/utils/auth-store";

function Settings() {
  const { logOut } = useAuthStore();

  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center color="secondary" size="heading">
        Settings
      </AppText>
      <Button title="Log Out" onPress={logOut} />
    </View>
  );
}

export default Settings;
