import ScreenWrapper from "@/components/ScreenWrapper";
import { supabase } from "@/lib/supabase";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!email || !password || !name) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: password.trim(),
    });

    if (error) {
      setLoading(false);
      Alert.alert("Signup Failed", error.message);
      return;
    }

    // Insert profile record
    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: data.user.id,
          name: name.trim(),
          email: email.trim(),
        },
      ]);

      if (profileError) {
        console.log("Profile insert error:", profileError);
      }
    }

    setLoading(false);
    Alert.alert("Success", "Welcome 🎉");
    router.replace("/home");
  };

  return (
    <ScreenWrapper bg="white" barStyle="dark">
      {/* Back button */}
      <View style={{ paddingLeft: 12, paddingBottom: 6 }}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
      </View>

      {/* Title */}
      <View style={{ paddingHorizontal: 25 }}>
        <Text style={styles.title}>Hey, Welcome</Text>
        <Text style={styles.subtitle}>Please Sign Up to Continue</Text>

        {/* Input Fields */}
        <View style={{ paddingTop: 30 }}>
          <View style={styles.inputContainer}>
            <Foundation
              name="text-color"
              size={22}
              color="#4cafef"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor="#888"
              autoCapitalize="words"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={22}
              color="#4cafef"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#4cafef"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        {/* SignUp Button */}
        <TouchableOpacity
          onPress={handleSignUp}
          disabled={loading}
          style={{ marginTop: 30 }}
        >
          <LinearGradient
            colors={["#4cafef", "#2b6be4"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.button, loading && { opacity: 0.6 }]}
          >
            <Text style={styles.buttonText}>
              {loading ? "Signing Up..." : "Sign Up"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Bottom Line */}
        <View style={styles.bottomTextContainer}>
          <Text style={{ color: "#444" }}>Already have an Account? </Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#2b6be4" }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
    color: "black",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "#666",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 18,
    backgroundColor: "#fafafa",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color: "black",
  },
  button: {
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  bottomTextContainer: {
    flexDirection: "row",
    marginTop: 25,
    alignSelf: "center",
  },
});
