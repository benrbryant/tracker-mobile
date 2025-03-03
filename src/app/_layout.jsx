import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider, useSelector } from "react-redux";
import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import store from "../common/store/store";
import Loader from "../common/components/Loader";

let { user } = store.getState();

export default function DefaultLayout() {
  let isLoggedIn = user != null;

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          {isLoggedIn ? <Slot /> : <Loader />}
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
});
