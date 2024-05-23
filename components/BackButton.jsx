import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import BackIcon from "../assets/icons/back-solid.png";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={BackIcon} style={styles.image} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  cont: {
    width: "auto",
    flex: 0,
  },
  image: {
    tintColor: "#222",
    height: 20,
    width: 14,
  },
});
