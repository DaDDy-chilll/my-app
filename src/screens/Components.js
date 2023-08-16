import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Components = () => {
  const greeting = <Text style={styles.subHeaderStyle}>My name is DaDDy</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting Start with react native!</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: "green",
  },
  subHeaderStyle: {
    fontSize: 20,
    color: "red",
  },
});

export default Components;
