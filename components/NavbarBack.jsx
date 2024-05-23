import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "./BackButton";

function NavbarBack({ text, onPress }) {
  return (
    <View style={styles.container}>
      <BackButton onPress={onPress} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFC300",
    height: 48,
    display: "flex",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#203239",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "700",
    flex: 1,
  },
});
export default NavbarBack;
