import { View, Text, StyleSheet } from "react-native";

export default function TodoItem({ item }) {
  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: item.color, height: 10, width: 10 }}
      ></View>
      <View>
        <Text style={styles.listItem}>{item.data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "ff0000",
    borderWidth: 2,
  },
  
  listItem: {
    color: "#000000",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
