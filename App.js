import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screen/HomeScreen";
import Components from "./src/screen/Components";
import ListScreen from "./src/screen/ListScreen";
import ImageScreen from "./src/screen/ImageScreen";
import CounterScreen from "./src/screen/CounterScreen";
import ColorScreen from "./src/screen/ColorScreen";
import SquareScreen from "./src/screen/SquareScreen";
import TextScreen from "./src/screen/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
