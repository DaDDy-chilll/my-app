import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 1 },
    { name: "Friend 2", age: 2 },
    { name: "Friend 3", age: 3 },
    { name: "Friend 4", age: 4 },
    { name: "Friend 5", age: 5 },
    { name: "Friend 6", age: 6 },
    { name: "Friend 7", age: 7 },
    { name: "Friend 8", age: 8 },
    { name: "Friend 9", age: 9 },
    { name: "Friend 10", age: 10 },
    { name: "Friend 11", age: 11 },
    { name: "Friend 12", age: 12 },
  ];

  //Horizontal flat list
  // return(
  //    <FlatList
  //     horizontal
  //     showsHorizontalScrollIndicator={false}
  //     keyExtractor={friend=>friend.name}
  //     data={friends} r
  //     enderItem={({item})=>{
  //         return <Text style={styles.textStyle}>{item.name}</Text>
  //     }}
  //   />
  // )

  //Vertical flat list
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      showsVerticalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {" "}
            {item.name} - Age {item.age}{" "}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
  },
});

export default ListScreen;
