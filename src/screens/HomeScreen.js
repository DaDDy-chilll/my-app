import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Hi, Welcome to React Native!</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go To Lists Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go To Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go To Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go To Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go To Square Color Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go To Text Screen Demo"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  },
});

export default HomeScreen;
