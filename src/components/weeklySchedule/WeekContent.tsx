import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";
import { ACTIVE_MODE } from "../../constants/constant";

interface UserWeeklyData {
  id: number;
  weekNumber: number;
  content: string;
  done: boolean;
}

interface PropsUserWeeklyData {
  data: Array<UserWeeklyData>;
  mode: ACTIVE_MODE;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
}

function WeekContent({ data, mode, onDone, onRemove }: PropsUserWeeklyData) {
  const [step, setStep] = useState(1);

  const renderItem = ({ item }: { item: UserWeeklyData }) => {
    return (
      <ListItem item={item} mode={mode} onDone={onDone} onRemove={onRemove} />
    );
  };

  return (
    <>
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
    </>
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
