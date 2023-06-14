import Constants from "expo-constants";
import { useAuth0 } from "react-native-auth0";
import Button from "./common/Button";

export default function LoginButton() {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      await authorize(
        { scope: "openid profile email" },
        { customScheme: Constants.expoConfig.extra.customScheme }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />;
}
