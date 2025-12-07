import { Text, View } from "react-native";
import SignIn from "./sign-in";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this</Text>
      <SignIn />
    </View>
  );
}
