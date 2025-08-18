import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
type Params = {
  id: string;
};

function Page() {
  const { id } = useLocalSearchParams<Params>();

  return (
    <View>
      <Stack.Screen options={{ title: `Page ${id}` }} />
      <Text>Page</Text>
    </View>
  );
}

export default Page;
