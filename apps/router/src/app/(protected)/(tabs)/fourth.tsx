import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";
import { useAuth } from "@/utils/auth-context";

export default function Index() {
  const { logout } = useAuth();

  return (
    <View className="flex-1 justify-center p-4">
      <AppText center>Fourth Screen</AppText>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
