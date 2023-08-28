import { View, FlatList, StyleSheet } from "react-native";
import { selectAllTodos } from "../../common/store/todosSlice";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  let todos = useSelector(selectAllTodos);

  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={todos} renderItem={TodoItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  list: {
    borderWidth: 2,
    borderColor: "#00ff00",
  },
});
