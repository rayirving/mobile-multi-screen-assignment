import { StyleSheet, Text, View } from "react-native";

const Lists = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login to Letterbox to view Lists</Text>
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontWeight: 800,
    fontSize: 18,
  }
});