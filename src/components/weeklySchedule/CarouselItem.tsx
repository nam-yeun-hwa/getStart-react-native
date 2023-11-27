import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

export interface CarouselWeekItem {
  weekNumber: number;
  active: boolean;
  onClickIndex: (index: number) => void;
}

/**
 * CarouselItem 컴포넌트
 * @description 캐러셀되는 아이템
 */
function CarouselItem({ active, weekNumber, onClickIndex }: CarouselWeekItem) {
  /**
   * @function onSnapToItem
   * @description 캐러셀 아이템 클릭시 인덱스 값을 부모에게 전달
   */
  const onSnapToItem = () => {
    onClickIndex(weekNumber);
  };
  return (
    <TouchableNativeFeedback onPress={onSnapToItem}>
      <View style={[styles.container, active && styles.activeState]}>
        <Text style={[styles.smallText, active && styles.activeFontColor]}>
          week
        </Text>
        <Text style={[styles.emphasisText, active && styles.activeFontColor]}>
          {weekNumber}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderRadius: 60,
    backgroundColor: "#F6F5F8",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginRight: 8,
  },
  smallText: {
    fontSize: 11.2,
    color: "#999999",
  },
  emphasisText: {
    fontSize: 19,
    color: "#999999",
    fontWeight: "700",
  },
  activeState: {
    backgroundColor: "#44CEC6",
  },
  activeFontColor: {
    color: "#FFF",
  },
});

export default CarouselItem;
