import { FlatList, StyleSheet, Text, View } from "react-native";

interface UserWeeklyData {
  id: number;
  weekNumber: number;
  content: string;
}

function UserWeeklyList({ data }) {
  const renderItem = ({ item }: { item: UserWeeklyData }) => (
    <View>
      <Text>{item.content}</Text>
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
  },
});

export default UserWeeklyList;
