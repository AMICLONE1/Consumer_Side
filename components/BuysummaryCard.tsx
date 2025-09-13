import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BuySummaryCard() {
  return (
    <View style={styles.card}>
      {/* Balance Info */}
      <View>
        <Text style={styles.label}>Current Balance</Text>
        <Text style={styles.balance}>₹5,000</Text>
      </View>

      {/* Add Funds Button */}
      <TouchableOpacity>
        <LinearGradient
          colors={["#4cafef", "#2b6be4"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Funds</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 10,
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
  balance: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2b6be4",
    marginTop: 4,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});
