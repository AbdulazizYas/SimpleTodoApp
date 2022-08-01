import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function ToolBar() {
  return (
    <View style={styles.toolBar}>
      <Text style={styles.title}>Todomo</Text>
      <StatusBar
        backgroundColor="rgba(0,0,0,.2)"
        color="white"
        barStyle="dark-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  toolBar: {
    backgroundColor: "cornflowerblue",
    height: 96,
    paddingTop: 48,
    paddingHorizontal: 20,
  },
  status: {
    backgroundColor: "#202020",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
