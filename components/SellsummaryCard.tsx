import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SellSummaryCard() {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <FontAwesome5 name="money-bill-wave" size={22} color="#16a34a" />
        <Text style={styles.title}>Sell Summary</Text>
      </View>

      {/* Balance */}
      <View style={styles.balanceRow}>
        <Text style={styles.label}>Current Balance</Text>
        <Text style={styles.value}>₹8,450</Text>
      </View>

      {/* Withdraw Button */}
      <TouchableOpacity style={{ marginTop: 16 }}>
        <LinearGradient
          colors={["#4cafef", "#2b6be4"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Withdraw Amount</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
    color: "#333",
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  value: {
    fontSize: 20,
    fontWeight: "700",
    color: "#16a34a",
  },
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
