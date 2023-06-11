import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import { Auth0Provider } from "react-native-auth0";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Auth0Provider
      domain={Constants.expoConfig.extra.domain}
      clientId={Constants.expoConfig.extra.clientId}
    >
      <View style={styles.container}>
        <Profile />
        <StatusBar style="auto" />
      </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
