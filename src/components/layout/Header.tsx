import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  editMode: boolean;
  onModeToggle: () => void;
}

function Header({ editMode, onModeToggle }: HeaderProps): JSX.Element {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]}></View>
      <StatusBar backgroundColor={"white"} />
      <View style={styles.container}>
        <Text style={styles.fonts}>Checklists</Text>

        <TouchableOpacity onPress={onModeToggle} style={styles.mode}>
          <View style={styles.mode}>
            <Text>{editMode ? "Edit" : "Done"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  fonts: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  statusBarPlaceholder: {
    backgroundColor: "white",
  },
  mode: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default Header;
