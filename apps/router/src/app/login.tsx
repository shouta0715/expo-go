import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";
import { useAuth } from "@/utils/auth-context";

export default function LoginScreen() {
  const { login, isReady } = useAuth();

  return (
    <View className="flex-1 justify-center p-4">
      <AppText center>Login Screen</AppText>
      <Button disabled={!isReady} title="Login" onPress={login} />
    </View>
  );
}
