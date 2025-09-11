import ScreenWrapper from "@/components/ScreenWrapper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white" barStyle="dark">
      {/* Back button */}
      <View style={{ paddingLeft: 12, paddingBottom: 6 }}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
      </View>

      {/* Title + Subtitle */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>Hey, Welcome</Text>
        <Text style={styles.subtitle}>Please Login to Continue</Text>
      </View>

      {/* login form fields */}
      <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={22}
            color="#555"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#777"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#555"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#777"
            secureTextEntry
          />
        </View>
      </View>

      {/* Login button */}
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/home")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Line */}
      <View style={styles.bottomTextContainer}>
        <Text>Don’t have an Account? </Text>
        <Pressable onPress={() => router.push("/signUp")}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "#555",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: "black",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 10,
    height: 50,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomTextContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
  },
  signUpText: {
    fontSize: 15,
    color: "blue",
    fontWeight: "600",
  },
});
