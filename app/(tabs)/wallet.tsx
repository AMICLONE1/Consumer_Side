import BuySummaryCard from "@/components/BuysummaryCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import SellSummaryCard from "@/components/SellsummaryCard";
import TransactionCard from "@/components/TrasnsactionCard";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const wallet = () => {
  return (
    <ScreenWrapper bg="white" barStyle="dark">
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.title}> Wallet</Text>
      </View>
      <View>
        <BuySummaryCard />
      </View>
      <View>
        <SellSummaryCard />
      </View>
      <View>
        <TransactionCard />
      </View>
    </ScreenWrapper>
  );
};

export default wallet;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "black",
  },
});
