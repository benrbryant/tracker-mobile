import Button from "./common/Button";

export default function LoginButton() {
  const onPress = async () => {
    try {
      alert("Logging In...")
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />;
}
