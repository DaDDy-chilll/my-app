import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Hi, Welcome to React Native!</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
        color="blue"
      />
      <Button
        title="Go To Lists Demo"
        onPress={() => navigation.navigate("List")}
        color="green"
      />
      <Button
        title="Go To Image Demo"
        onPress={() => navigation.navigate("Image")}
        color="red"
      />
      <Button
        title="Go To Counter Demo"
        onPress={() => navigation.navigate("Counter")}
        color="yellow"
      />
      <Button
        title="Go To Color Demo"
        onPress={() => navigation.navigate("Color")}
        color="orange"
      />
      <Button
        title="Go To Square Color Demo"
        onPress={() => navigation.navigate("Square")}
        color="gray"
      />
      <Button
        title="Go To Text Screen Demo"
        onPress={() => navigation.navigate("Text")}
        color="purple"
      />
      <Button
        title="Go To Box Screen Demo"
        onPress={() => navigation.navigate("Box")}
        color="lightgreen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  },
  btnStyle: {
    margin: 5,
    height: 10,
  },
});

export default HomeScreen;
