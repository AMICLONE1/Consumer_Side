import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function TransactionCard() {
  // Dummy Data
  const buyData = [
    { id: "1", amount: "₹500", date: "2025-09-10" },
    { id: "2", amount: "₹1200", date: "2025-09-11" },
    { id: "3", amount: "₹800", date: "2025-09-12" },
  ];

  const sellData = [
    { id: "1", amount: "₹700", date: "2025-09-10" },
    { id: "2", amount: "₹950", date: "2025-09-11" },
    { id: "3", amount: "₹1100", date: "2025-09-12" },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.amount}>{item.amount}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Transaction Details</Text>

      <View style={styles.columns}>
        {/* Buy Column */}
        <View style={styles.column}>
          <Text style={styles.header}>Buy</Text>
          <FlatList
            data={buyData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Sell Column */}
        <View style={styles.column}>
          <Text style={styles.header}>Sell</Text>
          <FlatList
            data={sellData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    margin: 16,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  },
  columns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
  },
  header: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
    color: "#2b6be4",
  },
  divider: {
    width: 1,
    backgroundColor: "#ddd",
  },
  row: {
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
    padding: 8,
    borderRadius: 8,
  },
  amount: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
});
