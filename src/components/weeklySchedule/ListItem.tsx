import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ACTIVE_MODE } from "../../constants/constant";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

interface UserWeeklyData {
  id: number;
  weekNumber: number;
  content: string;
  done: boolean;
}

interface WeeklyItemProps {
  item: UserWeeklyData;
  mode: ACTIVE_MODE;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
}

function ListItem({ item, mode, onDone, onRemove }: WeeklyItemProps) {
  const width = Dimensions.get("window").width + 500;

  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    console.log(mode);
    if (mode === ACTIVE_MODE.DONE) {
      translateX.value = withTiming(-44, {
        duration: 150,
        easing: Easing.ease,
      }); // 애니메이션 등장
    } else {
      translateX.value = withTiming(0, {
        duration: 150,
        easing: Easing.ease,
      }); // 애니메이션 등장
    }
  }, [mode]);

  return (
    <Animated.View style={[, styles.container, animatedStyle]}>
      <View style={[{ width: width }, styles.item]}>
        {/* {mode === ACTIVE_MODE.EDIT && ( */}
        <TouchableOpacity onPress={() => onDone(item.id)}>
          <View
            style={[
              styles.checkBasic,
              item.done && styles.done,
              // mode === ACTIVE_MODE.EDIT && { marginLeft: 8 },
            ]}
          >
            {item.done ? (
              <Image
                source={require("../../assets/icon/ico_check_active.png")}
                style={styles.iconCheck}
              />
            ) : (
              <Image
                source={require("../../assets/icon/ico_check_basic.png")}
                style={styles.iconCheck}
              />
            )}
          </View>
        </TouchableOpacity>
        {/* )} */}

        <Text
          style={[
            { width: width * 0.342 },
            styles.txt,
            item.done && styles.lineThrough,
          ]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.content}
        </Text>

        {/* {mode === ACTIVE_MODE.DONE && ( */}
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <View style={styles.del}>
            <Image
              source={require("../../assets/icon/ico_minus.png")}
              style={styles.iconMinus}
            ></Image>
          </View>
        </TouchableOpacity>
        {/* )} */}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    // width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 20,
  },

  iconCheck: {
    width: 16,
    height: 16,
  },

  iconMinus: {
    width: 18,
    height: 18,
  },

  checkBasic: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginRight: 12,
  },

  done: {
    backgroundColor: "#44CEC6",
  },

  lineThrough: {
    color: "#C4C4C4",
    textDecorationLine: "line-through",
  },

  del: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#FF5146",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },

  txt: {
    // width: "89.2%",
    fontSize: 14,
    lineHeight: 21,
    marginVertical: 5,
  },
});

export default ListItem;
