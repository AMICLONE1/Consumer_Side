import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, bg = "white", barStyle = "dark" }) => {
  const { top, bottom, left, right } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
          backgroundColor: bg,
        },
      ]}
    >
      {/* Status Bar (auto adjusts with theme) */}
      <StatusBar style={barStyle} backgroundColor={bg} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
