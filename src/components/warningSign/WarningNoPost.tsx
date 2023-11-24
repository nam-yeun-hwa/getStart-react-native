import { Image, StyleSheet, Text, View } from "react-native";

function WarningNoPost(): JSX.Element {
  console.log("dssfdsfjj");
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/img_no_post.png")}
        style={styles.image}
        resizeMode={"contain"}
      />
      <Text style={styles.emphasisText}>No checklists</Text>
      <Text style={styles.smallText}>
        Add checklists that should be checked weekly.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    // backgroundColor:'red'
  },
  image: {
    width: 190,
    height: 140,
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
});

export default WarningNoPost;
