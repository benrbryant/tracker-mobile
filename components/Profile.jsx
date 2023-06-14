import { View, Text } from "react-native";
import { useAuth0 } from "react-native-auth0";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

export default function Profile() {
  const { user, error } = useAuth0();

  if (user) {
    return (
      <View>
        <Text>Logged in as {user.name}</Text>
        <LogoutButton />
      </View>
    );
  } else if (!user) {
    return (
      <View>
        <Text>Not logged in</Text>
        <LoginButton />
      </View>
    );
  } else if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Auth not working</Text>
      </View>
    );
  }
}
