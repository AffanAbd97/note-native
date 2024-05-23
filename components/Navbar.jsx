import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "./BackButton";

function Navbar() {
  return (
    <View style={styles.container}>
        
      <Text style={styles.text}>Note App</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFC300",
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#203239",
    fontSize: 24,
    fontWeight: "700",
  },
});
export default Navbar;
