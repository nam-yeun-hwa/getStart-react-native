import { FlatList, Image, StyleSheet, Text, View } from "react-native";

interface UserWeeklyData {
  id: number;
  weekNumber: number;
  content: string;
}

function UserWeeklyList({ data }) {
  const renderItem = ({ item }: { item: UserWeeklyData }) => (
    <View style={styles.container}>
      <View style={styles.item}>
        {/* <View style={styles.check}>
          <Image
            source={require("../../assets/icon/ico_check.png")}
            style={styles.iconCheck}
          />
        </View> */}
        <Text style={styles.txt} numberOfLines={2} ellipsizeMode="tail">
          {item.content}
        </Text>
        <View style={styles.del}>
          <Image
            source={require("../../assets/icon/ico_minus.png")}
            style={styles.iconMinus}
          ></Image>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 28,
    // backgroundColor: "red",
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

export default UserWeeklyList;
