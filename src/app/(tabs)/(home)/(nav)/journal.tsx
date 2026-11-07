import { StyleSheet, Text, View } from "react-native";

const Journal = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.loginText}>Login to Letterbox to view Journals</Text>
    </View>
  );
};

export default Journal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14181c",
  },
  loginText: {
    fontWeight: 800,
    fontSize: 18,
    color: "#d8dfe6",
  },
});
