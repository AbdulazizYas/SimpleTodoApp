import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import ToolBar from "./components/ToolBar";

export default function App() {
  const [todos, setTodos] = useState([
    { todo: "programming", id: "1" },
    { todo: "sleeping", id: "2" },
    { todo: "studying", id: "3" },
  ]);

  const handlePress = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const handleAdd = (text) => {
    if (text.length < 5) {
      Alert.alert("Warning!", "Todo must be 5 or more character length", [
        { title: "ok" },
      ]);
      return;
    }
    setTodos((prev) => {
      return [
        ...prev,
        { todo: text, id: (parseInt(prev[prev.length - 1].id) + 1).toString() },
      ];
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ToolBar />
        <View style={styles.content}>
          <AddTodo add={handleAdd} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={todos}
              renderItem={({ item }) => (
                <Todo item={item} press={() => handlePress(item.id)} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
