import AlertsMaintenanceCard from "@/components/AlertsMaintenanceCard";
import DashboardSummary from "@/components/DashboardSummary";
import Graphs from "@/components/Graphs";
import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const dashboard = () => {
  return (
    <ScreenWrapper bg="white" barStyle="dark">
      <ScrollView>
        <View>
          <Text style={styles.title}> Dashboard</Text>
        </View>

        <View>
          <DashboardSummary />
        </View>
        <View>
          <Graphs />
        </View>
        <View>
          <AlertsMaintenanceCard />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "black",
  },
});
