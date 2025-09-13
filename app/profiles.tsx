import ScreenWrapper from "@/components/ScreenWrapper";
import { supabase } from "@/lib/supabase";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
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
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  // 🔹 Fetch user profile
  const fetchProfile = async () => {
    try {
      setLoading(true);

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;
      if (!user) {
        Alert.alert("Error", "No user found. Please login again.");
        router.replace("/login");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;
      setUserProfile(data);
    } catch (err: any) {
      Alert.alert("Error", err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      router.replace("/login");
    }
  };

  // 🔹 Upload profile picture
  const uploadProfilePic = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
        base64: true, // 👈 needed
      });

      if (result.canceled) return;

      const file = result.assets[0];
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("No user logged in");

      const fileExt = file.uri.split(".").pop() || "jpg";
      const filePath = `avatars/${user.id}.${fileExt}`;

      // 🔹 Read file as Base64
      const base64Data = await FileSystem.readAsStringAsync(file.uri, {
        //encoding: FileSystem.EncodingType.Base64#,
        encoding: FileSystem.EncodingType.Base64,
      });

      // 🔹 Convert base64 → ArrayBuffer
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      // 🔹 Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, byteArray, {
          contentType: "image/jpeg",
          upsert: true,
        });

      if (uploadError) throw uploadError;

      // 🔹 Get public URL
      const { data: urlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      if (!urlData?.publicUrl) throw new Error("Could not get public URL");

      // 🔹 Save URL in profiles
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ avatar_url: urlData.publicUrl })
        .eq("id", user.id);

      if (updateError) throw updateError;

      fetchProfile(); // refresh
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };

  // 🔹 Reset profile picture
  const resetProfilePic = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from("profiles")
        .update({ avatar_url: null })
        .eq("id", user.id);

      if (error) throw error;

      fetchProfile();
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };

  // 🔹 Loading state
  if (loading) {
    return (
      <ScreenWrapper bg="white" barStyle="dark">
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#2b6be4" />
          <Text style={{ marginTop: 10 }}>Loading profile...</Text>
        </View>
      </ScreenWrapper>
    );
  }

  if (!userProfile) {
    return (
      <ScreenWrapper bg="white" barStyle="dark">
        <View style={styles.centered}>
          <Text>No profile found</Text>
        </View>
      </ScreenWrapper>
    );
  }

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
        <Pressable onPress={uploadProfilePic} onLongPress={resetProfilePic}>
          <View style={styles.profilePicWrapper}>
            {userProfile.avatar_url ? (
              <Image
                source={{ uri: userProfile.avatar_url }}
                style={styles.profilePic}
              />
            ) : (
              <Text style={styles.pfpText}>
                {userProfile.name ? userProfile.name[0].toUpperCase() : "U"}
              </Text>
            )}
          </View>
        </Pressable>
        <Text style={styles.name}>{userProfile.name || "Unnamed User"}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
        <Text style={styles.verification}>✅ Verified</Text>
      </View>

      {/* Account Summary */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Account Summary</Text>
        <Text style={styles.info}>User ID: {userProfile.id}</Text>
        <Text style={styles.info}>
          Member Since: {new Date(userProfile.created_at).toDateString()}
        </Text>
        <Text style={styles.info}>
          Overall Rating: {userProfile.rating ?? "N/A"}
        </Text>
      </View>

      {/* Linked Assets */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Linked Assets</Text>
        <View style={styles.assetBox}>
          <Text style={styles.assetText}>
            {userProfile.assets_number > 0
              ? `${userProfile.assets_number} assets linked`
              : "No assets linked yet"}
          </Text>
        </View>
      </View>

      {/* Logout */}
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
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  icon: { marginRight: 12 },
  title: { fontSize: 22, fontWeight: "700", color: "black" },
  profileSection: { alignItems: "center", marginVertical: 20 },
  profilePicWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    overflow: "hidden",
  },
  profilePic: { width: 100, height: 100, borderRadius: 50 },
  pfpText: { fontSize: 28, fontWeight: "700", color: "#555" },
  name: { fontSize: 20, fontWeight: "700", color: "#222" },
  email: { fontSize: 14, color: "#666", marginTop: 4 },
  verification: { fontSize: 14, color: "#777", marginTop: 4 },
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
  info: { fontSize: 14, color: "#444", marginBottom: 4 },
  assetBox: {
    height: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  assetText: { fontSize: 14, color: "#888" },
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
  buttonText: { fontSize: 18, fontWeight: "600", color: "white" },
});
