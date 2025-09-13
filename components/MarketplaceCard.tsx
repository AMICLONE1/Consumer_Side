import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Sample marketplace data
const buyListings = [
  {
    id: "1",
    source: "Rooftop Solar",
    seller: "Rajiv's Solar",
    price: "₹6.50 / kWh",
    distance: "1.5 km away",
  },
  {
    id: "2",
    source: "Wind Microgrid",
    seller: "GreenWind Energy",
    price: "₹5.80 / kWh",
    distance: "3.2 km away",
  },
  {
    id: "3",
    source: "Battery Storage",
    seller: "Omkar's Power Hub",
    price: "₹7.10 / kWh",
    distance: "0.8 km away",
  },
];

const sellListings = [
  {
    id: "1",
    source: "Surplus Solar",
    seller: "Your Plant",
    price: "₹6.20 / kWh",
    distance: "You",
  },
  {
    id: "2",
    source: "Battery Reserve",
    seller: "Your Hub",
    price: "₹6.80 / kWh",
    distance: "You",
  },
];

export default function Marketplace() {
  const [isSelling, setIsSelling] = useState(false);

  const listings = isSelling ? sellListings : buyListings;

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Ionicons name="sunny" size={28} color="#f9a825" />
        <Text style={styles.source}>{item.source}</Text>
      </View>

      {/* Seller Info */}
      <Text style={styles.seller}>{item.seller}</Text>

      {/* Price & Distance */}
      <View style={styles.row}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
      </View>

      {/* Action Button */}
      <TouchableOpacity>
        <LinearGradient
          colors={["#4cafef", "#2b6be4"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {isSelling ? "Sell Now" : "Buy Now"}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Toggle Switch */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>
          {isSelling ? "Sell Listings" : "Buy Listings"}
        </Text>
        <Switch
          value={isSelling}
          onValueChange={setIsSelling}
          trackColor={{ false: "#ccc", true: "#2b6be4" }}
          thumbColor={isSelling ? "#fff" : "#fff"}
        />
      </View>

      {/* Listings */}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#f5f9ff",
    borderRadius: 12,
    margin: 12,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  source: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginLeft: 8,
  },
  seller: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2b6be4",
  },
  distance: {
    fontSize: 14,
    color: "#777",
  },
  button: {
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
