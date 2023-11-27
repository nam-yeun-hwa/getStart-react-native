import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

/**
 * WarningNoPost 컴포넌트
 * @description 빈 리스트 일때 사용
 */
function WarningNoPost() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/img_no_post.png")}
        style={{ width: screenWidth / 1.4, height: screenWidth / 1.1 }}
        resizeMode={"contain"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
