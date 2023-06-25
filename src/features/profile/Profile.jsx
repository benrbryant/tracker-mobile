import { View, Text } from "react-native";
import Constants from "expo-constants";
import Button from "../../common/Button";

export default function Profile() {
  return (
    <View>
      <Text>Fetching from {Constants.expoConfig.extra.serverUrl}</Text>
      <Button title={"Press Me"} onPress={() => alert("Button pressed.")} />
    </View>
  );
}
