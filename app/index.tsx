import ScreenWrapper from "@/components/ScreenWrapper";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        {/* Hero Image */}
        <Image
          source={require("../assets/images/solar.jpg")}
          style={styles.vector}
        />

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Smart India Hackathon</Text>
          <Text style={styles.subTitle}>
            Innovative ideas that help manage and generate renewable &
            sustainable resources more efficiently.
          </Text>

          {/* Premium Gradient Button */}
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => router.push("/signUp")}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
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
    paddingHorizontal: 20,
    backgroundColor: "#f9fafc",
  },
  vector: {
    position: "absolute",
    top: 60,
    height: 260,
    width: 260,
    resizeMode: "contain",
    opacity: 0.9,
  },
  content: {
    alignItems: "center",
    marginTop: 320,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: "90%",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111",
    textAlign: "center",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  buttonWrapper: {
    width: "100%",
  },
  gradientButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
