import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function InteractiveGraphs() {
  const generation = [40, 55, 35, 70, 60, 80, 50];
  const consumption = [30, 45, 50, 60, 65, 75, 55];

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const earnings = 1200;
  const savings = 900;

  return (
    <View style={styles.container}>
      {/* Generation vs Consumption */}
      <Text style={styles.title}>Generation vs Consumption</Text>
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data: generation,
              color: () => "#2b6be4",
              strokeWidth: 2,
            },
            {
              data: consumption,
              color: () => "#f25f5c",
              strokeWidth: 2,
            },
          ],
          legend: ["Generation", "Consumption"],
        }}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#f9f9f9",
          backgroundGradientTo: "#f9f9f9",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(43, 107, 228, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#fff",
          },
        }}
        bezier
        style={styles.chart}
      />

      {/* Financials */}
      <Text style={styles.title}>Financials</Text>
      <BarChart
        data={{
          labels: ["Earnings", "Savings"],
          datasets: [{ data: [earnings, savings] }],
        }}
        width={screenWidth - 32}
        height={220}
        yAxisLabel="₹"
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#f9f9f9",
          backgroundGradientTo: "#f9f9f9",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
        }}
        style={styles.chart}
        fromZero
        showValuesOnTopOfBars
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 16,
    margin: 16,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 12,
    color: "#333",
    textAlign: "center",
  },
  chart: {
    borderRadius: 12,
    marginVertical: 8,
  },
});
