import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

interface DimActive {
  active: boolean;
}

const DimBehindKeyboardExample = ({ active }: DimActive) => {
  return (
    <>
      {active && (
        <>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.dimBehindKeyboard}
              ></KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  dimBehindKeyboard: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DimBehindKeyboardExample;
