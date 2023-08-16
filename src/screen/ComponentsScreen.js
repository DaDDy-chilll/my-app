import React from "react";
import { StyleSheet, Text } from "react-native";

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is Components Screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  },
});

export default ComponentsScreen;
