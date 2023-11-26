import { StyleSheet, Text, View } from "react-native";

interface CarouselWeekItem {
  weekNumber: string;
  active: boolean;
}

function CarouselItem({ active, weekNumber }: CarouselWeekItem): JSX.Element {
  return (
    <View style={[styles.container, active && styles.activeState]}>
      <Text style={[styles.smallText, active && styles.activeFontColor]}>
        week
      </Text>
      <Text style={[styles.emphasisText, active && styles.activeFontColor]}>
        {weekNumber}
      </Text>
    </View>
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
