import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ACTIVE_MODE } from "../../constants/constant";

interface HeaderProps {
  editMode: ACTIVE_MODE;
  onModeToggle: (active: ACTIVE_MODE) => void;
}

function Header({ editMode, onModeToggle }: HeaderProps) {
  const { top } = useSafeAreaInsets();
  /**
   * @function onActiveMode
   * @description 헤더 우측 EDIT와 DONE 현제 상태 체크
   */
  const onActiveMode = () => {
    let active =
      editMode === ACTIVE_MODE.EDIT ? ACTIVE_MODE.DONE : ACTIVE_MODE.EDIT;
    onModeToggle(active);
  };
  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]}></View>
      <StatusBar backgroundColor={"white"} />
      <View style={styles.container}>
        <Text style={styles.fonts}>Checklists</Text>

        <TouchableOpacity onPress={onActiveMode} style={styles.mode}>
          <View style={styles.mode}>
            <Text>{editMode === ACTIVE_MODE.EDIT ? "Edit" : "Done"}</Text>
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
