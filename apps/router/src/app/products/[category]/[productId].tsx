import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";

type Params = {
  category: string;
  productId: string;
};

const Page = () => {
  const params = useLocalSearchParams<Params>();

  return (
    <View className="flex-1 justify-center p-4">
      <AppText bold center>
        {JSON.stringify(params, null, " ")}
      </AppText>
    </View>
  );
};

export default Page;
