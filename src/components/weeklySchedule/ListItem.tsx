import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface UserWeeklyData {
  id: number;
  weekNumber: number;
  content: string;
  done: boolean;
}

interface WeeklyItemProps {
  item: UserWeeklyData;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
}

function ListItem({ item, onDone, onRemove }: WeeklyItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {/* <TouchableOpacity onPress={() => onDone(item.id)}>
          <View style={[styles.checkBasic, item.done && styles.done]}>
            <Image
              source={require("../../assets/icon/ico_check.png")}
              style={styles.iconCheck}
            />
          </View>
        </TouchableOpacity> */}
        <Text
          style={[styles.txt, item.done && styles.lineThrough]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.content}
        </Text>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <View style={styles.del}>
            <Image
              source={require("../../assets/icon/ico_minus.png")}
              style={styles.iconMinus}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: 8,
  },

  txt: {
    width: "89.2%",
    fontSize: 14,
    lineHeight: 21,
    marginVertical: 5,
  },
});

export default ListItem;
