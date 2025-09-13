import { AlertTriangle, Wrench } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AlertsMaintenanceCard() {
  return (
    <View style={styles.card}>
      {/* Header */}
      <Text style={styles.header}>Alerts & Maintenance</Text>

      {/* Alerts */}
      <View style={styles.row}>
        <AlertTriangle color="#f25f5c" size={22} />
        <Text style={styles.text}>2 Active Alerts</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Maintenance */}
      <View style={styles.row}>
        <Wrench color="#2b6be4" size={22} />
        <Text style={styles.text}>Next Service: Sept 25</Text>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    borderRadius: 16,
    elevation: 3, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  header: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  text: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#444",
  },
  button: {
    backgroundColor: "#f25f5c",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  buttonSecondary: {
    backgroundColor: "#2b6be4",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
