import { useRef, useState } from "react";
import {
  Button,
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from "react-native";

function InputBox(): JSX.Element {
  const TextInputRef = useRef<TextInput | null>(null);
  const [activeInputStyle, setActiveInput] = useState(true);

  const onPressAddItem = () => {
    Keyboard.dismiss();
    setActiveInput(true);
  };

  const onPressShowInputText = () => {
    TextInputRef.current?.focus();
    setActiveInput(false);
  };
  return (
    <View style={styles.container}>
      <View
        style={[styles.inputContainer, { opacity: activeInputStyle ? 0 : 1 }]}
      >
        <TextInput
          placeholder="Add a checklist..."
          style={styles.input}
          ref={TextInputRef}
        ></TextInput>
        <View style={styles.addContainer}>
          {Platform.select({
            ios: (
              <TouchableWithoutFeedback onPress={onPressAddItem}>
                <View style={styles.addButton}>
                  <Image
                    source={require("../../assets/icon/ico_arrow_up.png")}
                    style={styles.arrow}
                  ></Image>
                </View>
              </TouchableWithoutFeedback>
            ),
          })}
        </View>
      </View>

      {activeInputStyle &&
        Platform.select({
          ios: (
            <TouchableWithoutFeedback onPress={onPressShowInputText}>
              <View style={styles.showBtn}>
                <Image
                  source={require("../../assets/icon/ico_add_weekly_item.png")}
                  resizeMode="contain"
                ></Image>
              </View>
            </TouchableWithoutFeedback>
          ),
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 66,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  showBtn: {
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#44CEC6",
    marginBottom: 20,
    marginRight: 20,
  },

  inputContainer: {
    borderTopColor: "#F6F5F8",
    borderTopWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  input: {
    height: 42,
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#EAE9ED",
    backgroundColor: "#FAFAFA",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "400",
    paddingHorizontal: 16,
  },

  addContainer: {
    height: 42,
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#EAE9ED",
    backgroundColor: "#FAFAFA",
    paddingVertical: 12,
    borderTopRightRadius: 9,
    borderBottomEndRadius: 8,
    paddingRight: 5,
  },
  addButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#44CEC6",
    borderRadius: 12.4,
  },
  arrow: {
    width: 18,
    height: 18,
  },
});

export default InputBox;
