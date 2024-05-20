import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
function CustomButton({
  bgColor,
  color,
  text,
  onPress,
  fontSize = 25,
  width = 120,
}) {
  const style = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: bgColor,
      width,
      padding: 10,
    },
    buttonText: {
      fontSize,
      fontWeight: "700",
      color,
    },
  });

  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
