import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EnergyCard = () => {
  return (
    <LinearGradient
      colors={["#4cafef", "#2b6be4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.diagramContainer}>
        <MotiView
          from={{ opacity: 0.3, scale: 2 }}
          animate={{ opacity: 1, scale: 0.7 }}
          transition={{ loop: true, type: "timing", duration: 2000 }}
          style={styles.circle}
        />
        <Text style={styles.diagramText}>⚡</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.stats}>
        <Text style={styles.statText}>
          Energy Produced Today: <Text style={styles.bold}>15 kWh</Text>
        </Text>
        <Text style={styles.statText}>
          Energy Consumed Today: <Text style={styles.bold}>10 kWh</Text>
        </Text>
        <Text style={styles.statText}>
          Power Quality: <Text style={styles.bold}>Good</Text>
        </Text>
        <Text style={styles.statText}>
          Frequency: <Text style={styles.bold}>50 Hz</Text>
        </Text>
        <Text style={styles.statText}>
          DC Input: <Text style={styles.bold}>320 V</Text>
        </Text>
        <Text style={styles.statText}>
          AC Output: <Text style={styles.bold}>230 V</Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

export default EnergyCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 20,
    margin: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  diagramContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  circle: {
    width: 80,
    height: 60,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  diagramText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  stats: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    padding: 12,
  },
  statText: {
    fontSize: 20,
    color: "white",
    marginBottom: 6,
  },
  bold: {
    fontWeight: "700",
    color: "#fff",
  },
});
