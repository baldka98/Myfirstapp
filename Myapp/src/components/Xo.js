import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Xo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tictac}></View>
      <Text>Xo</Text>
      <Text>My first fffffggs..</Text>
    </View>
  );
};

export default Xo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
});
