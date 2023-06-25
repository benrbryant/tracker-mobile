import { View, Pressable, Text, StyleSheet } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonLabel: {
    color: "#000000",
    fontSize: 16,
  },
});
