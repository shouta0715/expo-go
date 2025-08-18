import { Link } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";
import { useAuthStore } from "@/utils/auth-store";

function SignIn() {
  const { logIn, logInAsVip } = useAuthStore();

  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center color="secondary" size="heading">
        SignIn
      </AppText>
      <Button title="Log In" onPress={logIn} />
      <Button title="Log In as VIP" onPress={logInAsVip} />
      <Link asChild push href="/modal">
        <Button disabled theme="secondary" title="Open Modal" />
      </Link>
    </View>
  );
}

export default SignIn;
