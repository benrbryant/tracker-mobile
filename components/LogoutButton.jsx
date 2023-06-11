import Constants from "expo-constants";
import { useAuth0 } from "react-native-auth0";

export default function LogoutButton() {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession({
        customScheme: Constants.expoConfig.extra.customScheme,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log out" />;
}
