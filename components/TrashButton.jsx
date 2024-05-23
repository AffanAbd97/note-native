import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import trash from "../assets/icons/trash-solid.png";

const TrashButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={trash} style={styles.image} />
    </TouchableOpacity>
  );
};

export default TrashButton;

const styles = StyleSheet.create({
  cont: {
    width: "auto",
  },
  image: {
    tintColor: "#999",
    height: 20,
    width: 14,
  },
});
