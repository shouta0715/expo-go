import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";

const proverbs = [
  { id: "1", proverb: "急がば回れ", source: "日本のことわざ" },
  { id: "2", proverb: "猿も木から落ちる", source: "日本のことわざ" },
  { id: "3", proverb: "石の上にも三年", source: "日本のことわざ" },
  { id: "4", proverb: "七転び八起き", source: "日本のことわざ" },
  { id: "5", proverb: "二兎を追う者は一兎をも得ず", source: "日本のことわざ" },
  { id: "6", proverb: "雨降って地固まる", source: "日本のことわざ" },
  { id: "7", proverb: "出る杭は打たれる", source: "日本のことわざ" },
  { id: "8", proverb: "転ばぬ先の杖", source: "日本のことわざ" },
  { id: "9", proverb: "百聞は一見に如かず", source: "日本のことわざ" },
  { id: "10", proverb: "花より団子", source: "日本のことわざ" },
];

type Params = {
  id: string;
};

const Page = () => {
  const { id } = useLocalSearchParams<Params>();
  const proverb = proverbs.find((p) => p.id === id);

  if (!proverb) {
    return (
      <View className="flex-1 justify-center p-4">
        <AppText bold center size="heading">
          Not Found
        </AppText>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center p-4">
      <Stack.Screen
        options={{
          title: `${proverb.proverb} - ${proverb.source}`,
        }}
      />
      <AppText bold center size="heading">
        Proverb {id}
      </AppText>
      <AppText bold center>
        {proverb.proverb}
      </AppText>
    </View>
  );
};

export default Page;
