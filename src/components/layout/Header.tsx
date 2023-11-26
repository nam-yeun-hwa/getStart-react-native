import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Header(): JSX.Element {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]}></View>
      <StatusBar backgroundColor={"white"} />
      <View style={styles.container}>
        <Text style={styles.fonts}>Checklists</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  fonts: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  container: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  statusBarPlaceholder: {
    backgroundColor: "white",
  },
});

export default Header;
