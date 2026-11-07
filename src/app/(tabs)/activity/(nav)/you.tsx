import { StyleSheet, Text, View } from "react-native";

const You = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.loginText}>No Results.</Text>
      <Text style={styles.loginText}>Log in to Letterbox to see your activity.</Text>
    </View>
  );
};

export default You;

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
  }
});