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
        <View style={styles.check}>
          <Image
            source={require("../../assets/icon/ico_check.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.txt} numberOfLines={2} ellipsizeMode="tail">
          {item.content}
        </Text>
        {/* <View></View> */}
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

  icon: {
    width: 16,
    height: 16,
  },

  txt: {
    width: "89.2%",
    fontSize: 14,
    lineHeight: 21,
    marginVertical: 5,
  },
});

export default UserWeeklyList;
