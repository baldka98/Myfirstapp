import { StatusBar, StyleSheet, Text, View } from "react-native";
import Xo from "./src/components/Xo";
export default function App() {
  return (
    <View style={styles.container}>
      <Xo />
      <Text>HELLO GIT </Text>
      <Text> My first app </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "pink",
    alignItems: "left",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "green",
    textAlign: "justify",
  },
});
