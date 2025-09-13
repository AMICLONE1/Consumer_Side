import EnergyCard from "@/components/EnergyCard";
import Marketplace from "@/components/MarketplaceCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import { supabase } from "@/lib/supabase";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"online" | "offline">("online");

  // Fetch profile from Supabase
  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("name")
        .eq("id", user.id)
        .single();

      if (!error && data) {
        setName(data.name);
      } else {
        setName(user.email ?? "Guest");
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  return (
    <ScreenWrapper bg="white" barStyle="dark">
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.push("/profiles")}
          style={styles.iconButton}
        >
          <AntDesign name="user" size={30} color="black" />
        </Pressable>

        {loading ? (
          <ActivityIndicator size="small" color="#2b6be4" />
        ) : (
          <Text style={styles.title}>Hello {name ?? "..."}</Text>
        )}
      </View>

      {/* Status Bar */}
      <View style={styles.statusCard}>
        <View>
          <Text style={styles.label}>Net Income Today</Text>
          <Text style={styles.value}>₹2000</Text>
        </View>

        <View style={styles.statusRow}>
          <Text style={styles.label}>Status:</Text>
          <FontAwesome6
            name="circle-dot"
            size={20}
            color={status === "online" ? "green" : "red"}
            style={{ marginLeft: 8 }}
          />
        </View>
      </View>

      {/* Content with FlatList */}
      <FlatList
        data={[1]} // dummy data, since UI is static
        renderItem={null}
        keyExtractor={(item) => item.toString()}
        ListHeaderComponent={
          <>
            <EnergyCard />
            <Text style={styles.sectionTitle}>Nearby Marketplace Listing</Text>
            <Marketplace />
          </>
        }
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  iconButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "black",
  },
  statusCard: {
    backgroundColor: "#f5f9ff",
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2b6be4",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollContent: {
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    marginHorizontal: 20,
    marginVertical: 16,
  },
});
