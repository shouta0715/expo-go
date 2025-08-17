import { Link } from "expo-router";
import { View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <View className="flex-1 justify-center p-4">
      <AppText center>Top Level Screen</AppText>
      <Link asChild push href="/second">
        <Button title="Go to Second" />
      </Link>
      <Link asChild push href="/third">
        <Button title="Go to Third" />
      </Link>
      <Link
        asChild
        push
        href={{
          pathname: "/second",
          params: { name: "John" },
        }}
      >
        <Button theme="secondary" title="Go to Second with params" />
      </Link>
      <Link asChild push href="/proverbs/1">
        <Button theme="secondary" title="Go to Proverb 1" />
      </Link>
      <Link asChild push href="/proverbs/2">
        <Button theme="secondary" title="Go to Proverb 2" />
      </Link>
      <Link asChild push href="/products/electronics/123">
        <Button theme="secondary" title="Go to Product 123 (dynamic)" />
      </Link>
    </View>
  );
}
