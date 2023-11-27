import { useRef, useState } from "react";
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import DimBehindKeyboardExample from "./Dim";

interface InputBoxProps {
  onInsert: (text: string) => void;
}
function InputBox({ onInsert }: InputBoxProps) {
  const TextInputRef = useRef<TextInput | null>(null);
  const [activeInputStyle, setActiveInput] = useState(true);
  const [text, setText] = useState("");

  /**
   * @function onPressAddItem
   * @description 키보드 입력 버튼 누르면 내용 리스트에 추가 되도록 구현 및 키보드 빈 스트링으로 초기화
   */
  const onPressAddItem = () => {
    if (text.length > 0) {
      onInsert(text);
      setText("");
    }
    Keyboard.dismiss();
    setActiveInput(true);
  };

  /**
   * @function onPressShowInputText
   * @description 키보드에 포커스주기 & 키보드 active상태로 변경하기
   */
  const onPressShowInputText = () => {
    TextInputRef.current?.focus();
    setActiveInput(false);
  };

  /**
   * @function onToggle
   * @description Dim 영역 클릭시 키보드 닫히기
   */
  const onDimToggle = () => {
    setActiveInput(true);
  };

  return (
    <>
      <DimBehindKeyboardExample
        active={!activeInputStyle}
        onToggle={onDimToggle}
      />
      <View style={[styles.container, { opacity: activeInputStyle ? 0 : 1 }]}>
        <View style={[styles.inputContainer]}>
          <TextInput
            placeholder="Add a checklist..."
            style={styles.input}
            value={text}
            onChangeText={setText}
            ref={TextInputRef}
          ></TextInput>
          <View style={styles.addContainer}>
            {Platform.select({
              ios: (
                <TouchableWithoutFeedback onPress={onPressAddItem}>
                  <View style={styles.writeBtn}>
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
      </View>
      <View style={styles.btnContainer}>
        {activeInputStyle &&
          Platform.select({
            ios: (
              <TouchableOpacity
                onPress={onPressShowInputText}
                activeOpacity={0.5}
              >
                <View style={styles.showBtn}>
                  <Image
                    source={require("../../assets/icon/ico_add_weekly_item.png")}
                    resizeMode="contain"
                  ></Image>
                </View>
              </TouchableOpacity>
            ),
          })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 66,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
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

  writeBtn: {
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

  btnContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "100%",
    justifyContent: "flex-end",
  },

  showBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#44CEC6",
    marginBottom: 20,
    marginRight: 20,
  },
});

export default InputBox;
