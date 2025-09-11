import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <Image
          source={require("../assets/images/solar.jpg")}
          style={styles.vector}
        />

        <View style={styles.content}>
          <Text style={styles.title}>SIH</Text>
          <Text style={styles.subTitle}>
            Innovative ideas that help manage and generate renewable /
            sustainable resources more efficienty.
          </Text>
          <TouchableOpacity onPress={() => router.push("/signUp")}>
            <Text style={styles.button}>Getting Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  vector: {
    position: "absolute",
    top: 50,
    height: 250,
    width: 250,
    resizeMode: "contain",
  },
  content: {
    alignItems: "center",
    marginTop: 300,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
  },
});
