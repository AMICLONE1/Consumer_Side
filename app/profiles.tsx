import ScreenWrapper from "@/components/ScreenWrapper";
import { supabase } from "@/lib/supabase";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Profiles = () => {
  const router = useRouter();

  // Dummy Data (replace with Supabase user data)
  const user = {
    name: "Omkar Kolhe",
    userId: "USR12345",
    memberSince: "Jan 2023",
    rating: "4.8 ⭐",
    verified: true,
    profilePic: null, // Replace with actual image URL
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      router.replace("/login");
    }
  };

  return (
    <ScreenWrapper bg="white" barStyle="dark">
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.icon}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
        <Text style={styles.title}>Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profilePicWrapper}>
          {user.profilePic ? (
            <Image
              source={{ uri: user.profilePic }}
              style={styles.profilePic}
            />
          ) : (
            <Text style={styles.pfpText}>PFP</Text>
          )}
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.verification}>
          {user.verified ? "✅ Verified" : "❌ Not Verified"}
        </Text>
      </View>

      {/* Account Summary */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Account Summary</Text>
        <Text style={styles.info}>User ID: {user.userId}</Text>
        <Text style={styles.info}>Member Since: {user.memberSince}</Text>
        <Text style={styles.info}>Overall Rating: {user.rating}</Text>
      </View>

      {/* Linked Assets */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Linked Assets</Text>
        <View style={styles.assetBox}>
          <Text style={styles.assetText}>No assets linked yet</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} style={{ marginTop: 30 }}>
        <LinearGradient
          colors={["#4cafef", "#2b6be4"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "black",
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  profilePicWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  pfpText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  verification: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#2b6be4",
  },
  info: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4,
  },
  assetBox: {
    height: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  assetText: {
    fontSize: 14,
    color: "#888",
  },
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});
