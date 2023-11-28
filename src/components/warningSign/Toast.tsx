import { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface ToastProp {
  message: string;
  isVisible: boolean;
  onUndo: () => void;
}

const Toast = ({ message, isVisible, onUndo }: ToastProp) => {
  const opacity = useSharedValue(1);
  const positionY = useSharedValue(60);

  useEffect(() => {
    if (isVisible) {
      opacity.value = withTiming(1, { duration: 300 });
      positionY.value = withSpring(-20, { duration: 1000 });
      setTimeout(() => {
        opacity.value = withTiming(0, { duration: 1000 });
        positionY.value = withSpring(60, {
          duration: 600,
        });
      }, 10000); // 2초 후에 토스트를 닫음
    } else {
      positionY.value = withSpring(60, {
        duration: 600,
      });
    }
  }, [isVisible, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: positionY.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.innlerCotainer}>
        <Text style={styles.toastText}>{message}</Text>
        <TouchableOpacity onPress={onUndo}>
          <View style={styles.button}>
            <Image
              source={require("../../assets/icon/ico-toast-undo.png")}
              style={styles.icon}
            />
            <Text style={styles.btnTxt}>Undo</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: 46,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  innlerCotainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  toastText: {
    color: "white",
    fontSize: 13.5,
    lineHeight: 18,
  },

  icon: {
    width: 18,
    height: 18,
  },

  button: {
    flexDirection: "row",
  },

  btnTxt: {
    fontSize: 13.5,
    lineHeight: 17,
    color: "#44CEC6",
    marginLeft: 4,
    fontWeight: "600",
  },
});

export default Toast;
