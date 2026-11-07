import { StyleSheet, Text, View } from "react-native";

const Lists = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.loginText}>No Lists.</Text>
      <Text style={styles.loginText}>Log in to Letterbox create lists.</Text>
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14181c",
  },
  loginText: {
    fontSize: 16,
    color: "#667788",
    marginVertical: 4,
  },
});
