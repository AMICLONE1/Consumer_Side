import ScreenWrapper from "@/components/ScreenWrapper";
import Foundation from "@expo/vector-icons/Foundation";

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

const SignUp = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white" barStyle="dark">
      <View style={{ paddingLeft: 12, paddingBottom: 6 }}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
      </View>

      {/* Title */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>Hey, Welcome</Text>
        <Text style={styles.subtitle}>Please Sign Up to Continue</Text>

        {/* Input Fields */}
        <View style={{ paddingTop: 25 }}>
          <View style={styles.inputContainer}>
            <Foundation
              name="text-color"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor="#777"
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={24}
              color="black"
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
              size={24}
              color="black"
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
        <View>
          <TouchableOpacity onPress={() => router.push("/home")}>
            <Text style={styles.button}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}
        >
          <Text> Already have an Account </Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={{ fontSize: 15, color: "blue" }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
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
    alignContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    paddingBottom: 10,
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
    color: "white",
    borderRadius: 5,
    paddingTop: 15,
    height: 50,
    width: 350,
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
  },
});
