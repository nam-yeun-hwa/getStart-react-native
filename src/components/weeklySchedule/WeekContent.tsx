import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./ListItem";
import { ACTIVE_MODE } from "../../constants/constant";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface UserWeeklyData {
  id: number;
  weekNumber: number;
  content: string;
  done: boolean;
}

interface PropsUserWeeklyData {
  data: Array<UserWeeklyData>;
  mode: ACTIVE_MODE;
  slideDirection: number;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
}

function WeekContent({
  data,
  mode,
  slideDirection,
  onDone,
  onRemove,
}: PropsUserWeeklyData) {
  const translateX = useSharedValue(-800);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    translateX.value = withTiming(0, { duration: 600, easing: Easing.ease }); // 애니메이션 등장
  }, [data]);

  useEffect(() => {
    return () => {
      if (slideDirection > 0) {
        translateX.value = 800;
      } else {
        translateX.value = -800;
      }
    };
  }, [slideDirection]);

  const renderItem = ({ item }: { item: UserWeeklyData }) => {
    return (
      <ListItem item={item} mode={mode} onDone={onDone} onRemove={onRemove} />
    );
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ProgressBar
        totalStep={data.length}
        nowStep={data.filter((v) => v.done).length}
      />

      <FlatList
        style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "130%",
  },

  item: {
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

  check: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: "#44CEC6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginRight: 12,
  },

  del: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#FF5146",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  txt: {
    width: "89.2%",
    fontSize: 14,
    lineHeight: 21,
    marginVertical: 5,
  },
});

export default WeekContent;
