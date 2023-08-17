import { Text, View, StyleSheet } from "react-native";
const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    height: 200,
    borderColor: "black",
    justifyContent: "space-around",
    flexDirection: "row",
    // alignItems: "flex-end",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "pink",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "lightgreen",
    alignSelf: "center",
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "lightblue",
  },
});
export default BoxScreen;
