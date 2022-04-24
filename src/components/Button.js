import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={style.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={style.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
