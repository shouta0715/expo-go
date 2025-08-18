import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Modal, View } from "react-native";
import { AppText } from "@/components/app-text";
import { Button } from "@/components/button";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenAlert = () => {
    Alert.alert("Alert", "This is an alert", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => console.debug("OK"),
        style: "default",
      },
    ]);
  };

  return (
    <View className="flex-1 justify-center p-4">
      <AppText center>Top Level Screen</AppText>
      <Link asChild push href="/modal">
        <Button title="Go to Modal" />
      </Link>
      <Link asChild push href="/modal-with-stack">
        <Button title="Go to Modal with Stack" />
      </Link>
      <Button title="Open Alert" onPress={handleOpenAlert} />
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center p-4">
          <View className="bg-white p-12">
            <AppText center>Modal</AppText>
            <Button
              title="Close Modal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
