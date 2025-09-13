import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DashboardSummary() {
  return (
    <LinearGradient
      colors={["#e3f2fd", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {/* Today's Generation */}
      <View style={styles.section}>
        <Text style={styles.label}>Today's Generation</Text>
        <Text style={styles.bigValue}>32.5 kWh</Text>
      </View>

      {/* Earnings Today */}
      <View style={styles.section}>
        <Text style={styles.label}>Earnings Today</Text>
        <Text style={styles.value}>₹540</Text>
      </View>

      {/* System Health */}
      <View style={styles.sectionRow}>
        <FontAwesome6
          name="circle"
          size={12}
          color="green"
          style={{ marginRight: 4 }}
        />
        <Text style={styles.label}>System Health:</Text>
        <Text style={styles.health}> Optimal</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  section: {
    marginBottom: 8,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  label: {
    fontSize: 12,
    color: "#555",
  },
  bigValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2b6be4",
    marginTop: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2e7d32",
    marginTop: 2,
  },
  health: {
    fontSize: 13,
    fontWeight: "600",
    color: "green",
    marginLeft: 2,
  },
});
