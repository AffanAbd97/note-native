import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({ text, onChange, label, multiline, numberOfLines }) {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "#DDD",
      padding: 10,
    },
  });
  return (
    <View style={styles.textInputWrapper}>
      <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        onChangeText={onChange}
        defaultValue={text}
        placeholder={label}
      />
    </View>
  );
}

export default Input;
