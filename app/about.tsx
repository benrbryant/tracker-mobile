import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">About Screen</ThemedText>
      <Link href={"/"}>
        <ThemedText type="link">Back</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        padding: 32,
    }
})