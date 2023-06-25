import Button from "./common/Button";

export default function LogoutButton() {
  const onPress = async () => {
    try {
      alert("Logging out..");
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log out" />;
}
