import React from "react";
import { StyleSheet, TextInput, Platform } from "react-native";

export function Input({ value, onChangeText }) {
  return (
    <TextInput
      style={style.input}
      placeholder="New skill"
      placeholderTextColor="#555"
      onChangeText={onChangeText}
      value={value}
    />
  );
}

const style = StyleSheet.create({
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
