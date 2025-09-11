import ScreenWrapper from "@/components/ScreenWrapper";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <ScreenWrapper bg="white" barStyle="dark">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    </ScreenWrapper>
  );
}
