import React from "react";
import { StyleSheet, Text } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.textStyle}>Hi, Welcome to React Native!</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "green",
  },
});
export default HomeScreen;
