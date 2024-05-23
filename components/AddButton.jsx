import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Plus from "../assets/icons/plus-solid.png";

const AddButton = ({ onAddPress }) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onAddPress}>
      <Image source={Plus} style={styles.image} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  cont: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#FFC300", 
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    tintColor: "#fff",
    height: 45,
    width: 45,
  },
});
