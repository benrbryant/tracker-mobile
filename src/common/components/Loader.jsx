import { View, Text, StyleSheet } from "react-native";

export default function Loader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    color: "#000000",
    borderWidth: 2,
    borderColor: "#00ff00",
  },
});
