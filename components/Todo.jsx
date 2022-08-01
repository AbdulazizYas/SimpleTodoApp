import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Todo({ item, press }) {
  return (
    <View style={styles.todo}>
      <TouchableOpacity onPress={press}>
        <MaterialIcons name="delete" size={18} color="#555" />
      </TouchableOpacity>
      <Text style={styles.todoTxt}>{item.todo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    marginTop: 16,
    padding: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  todoTxt: {
    marginLeft: 10,
  },
});
