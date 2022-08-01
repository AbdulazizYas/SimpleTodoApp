import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddTodo({ add }) {
  const [text, setText] = useState("");

  const txtChange = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="new Todo ..."
        onChangeText={txtChange}
        style={styles.input}
      />
      <Button title="Add" onPress={() => add(text)} color="cornflowerblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
});
