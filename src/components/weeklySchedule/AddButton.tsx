import { Image, StyleSheet, TextInput, View } from "react-native";

function AddButton(): JSX.Element {
  return (
    <View style={styles.container}>
      <View></View>
      {/* <TextInput placeholder="Add a checklist..." style={styles.input} /> */}
      <View style={styles.button}>
        <Image
          source={require("../../assets/icon/ico_add_weekly_item.png")}
          resizeMode="contain"
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 66,
    justifyContent: "flex-end",
    marginRight: 20,
    marginBottom: 38,
    alignItems: "center",
    flexDirection: "row",
    // borderColor: "#EAE9ED",
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // paddingHorizontal: 16,
    // paddingVertical: 16,
  },
  empty: {},
  // input: {
  //   flex: 1,
  //   fontSize: 14,
  //   lineHeight: 21,
  //   fontWeight: "400",
  //   paddingVertical: 8,
  // },
  button: {
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#44CEC6",
  },
  icon: {
    height: 26,
    width: 26,
  },
});

export default AddButton;
