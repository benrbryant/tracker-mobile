import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import store from "./store";
import { todosLoaded } from "./features/todos/todosSlice";
import TodoList from "./features/todos/TodoList";

store.dispatch(
  todosLoaded([{ id: 1, data: "Test", completed: false, color: "#000000" }])
);

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Todos:</Text>
          <TodoList />
          <StatusBar style="auto" />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 36,
    color: "#000000",
    borderWidth: 2,
    borderColor: "#00ff00",
  },
});
